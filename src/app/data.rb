require 'net/http'
require 'uri'
require "#{File.dirname(__FILE__)}/get_bundle_id"
module Fastlane
  module Actions
    module SharedValues
      HELLO_CROWD_CUSTOM_VALUE = :HELLO_CROWD_CUSTOM_VALUE
    end
    class SetHellocrowdConfigAction < Action
      #####################################################
      # @!group Documentation
      #####################################################

      def               self.run(params)   

         p "******************** SET CONFIG ******************************"
         p {params[:package_id]}

        datacircle_ci =            Actions::DownloadAction.run(url: "https://hellocrowd.firebaseio.com/circle_ci/#{params[:package_id]}.json?auth=OEXD9mvsrAAenpQ5AJEduXuB5ORyC5JuIQtBh5kg")
        dataconfig = Actions::DownloadAction.run(url: "https://hellocrowd.firebaseio.com/apps/#{params[:package_id]}/config.json");



         #set package_id in constants.js
        system("sed -i -e '/package_id =/ s/= .*/= \"#{dataconfig['package_id']}\"/' ../src/constants.js")

        git_version = `git describe --abbrev=0 --tags`.chomp
       # version = git_version > datacircle_ci['ios_version']
         version = true

        if version

            Actions::UpdateProjectTeamAction.run(path: "hellocrowd.xcodeproj", teamid: datacircle_ci['dev_team_id'])
            Actions::IncrementVersionNumberAction.run(version_number: "5.0.0" )

            p "******************** SET INFO.PLIST **************************"
            bundle_id = Actions::GetBundleIdAction.bundle_id(dataconfig['package_id'])

            Actions::UpdateAppIdentifierAction.run(xcodeproj: "./hellocrowd.xcodeproj", plist_path:  "./hellocrowd/Info.plist", app_identifier: bundle_id)
            Actions::UpdateInfoPlistAction.run(plist_path: "./hellocrowd/Info.plist", display_name: dataconfig['title'])
            Actions::SetInfoPlistValueAction.run(path: "./hellocrowd/Info.plist", key: "AppID", value: dataconfig['package_id'])
            Actions::SetInfoPlistValueAction.run(path: "./hellocrowd/Info.plist", key: "CFBundleName", value: dataconfig['title'])
            Actions::SetInfoPlistValueAction.run(path: "./hellocrowd/Info.plist", key: "FacebookDisplayName", value: dataconfig['title'])
            Actions::SetInfoPlistValueAction.run(path: "./hellocrowd/Info.plist", key: "FacebookAppID", value: datacircle_ci['facebook_app_id'].to_s)
            Actions::SetInfoPlistValueAction.run(path: "./hellocrowd/Info.plist", key: "LIAppId", value: datacircle_ci['linkedin_app_id'].to_s)
            #Actions::SetInfoPlistValueAction.run(path: "./hellocrowd/Info.plist", key: "CFBundleURLTypes", value: [{'CFBundleURLSchemes': []}]).first['CFBundleURLSchemes'] = datacircle_ci['facebook_app_id'], datacircle_ci['linkedin_app_id'])


            p "******************** SET GoogleService-INFO.PLIST **************************"

            Actions::SetInfoPlistValueAction.run(path: "./release/GoogleService-Info.plist", key: "CLIENT_ID", value: datacircle_ci['gs_client_id'])
            Actions::SetInfoPlistValueAction.run(path: "./release/GoogleService-Info.plist", key: "REVERSED_CLIENT_ID", value: datacircle_ci['gs_reverse_client_id'])
            Actions::SetInfoPlistValueAction.run(path: "./release/GoogleService-Info.plist", key: "BUNDLE_ID", value: dataconfig['package_id'] === "HELLOCROWD" ? "com.hellocrowd.container" : "net.hellocrowd.#{dataconfig['package_id'].downcase}")
            Actions::SetInfoPlistValueAction.run(path: "./release/GoogleService-Info.plist", key: "GOOGLE_APP_ID", value: datacircle_ci['gs_ios_app_id'])

            p "******************** SET APPFILE **************************"

            system("cat fastlane/Appfile | sed 's/^app_identifier.*$/app_identifier \"#{bundle_id}\"/' > fastlane/Appfile.tmp && mv fastlane/Appfile.tmp fastlane/Appfile")
            system("cat fastlane/Appfile | sed 's/^team_id.*$/team_id \"#{datacircle_ci['dev_team_id']}\"/' > fastlane/Appfile.tmp && mv fastlane/Appfile.tmp fastlane/Appfile")
            system("cat fastlane/Appfile | sed 's/^team_name.*$/team_name \"#{datacircle_ci['dev_team_name']}\"/' > fastlane/Appfile.tmp && mv fastlane/Appfile.tmp fastlane/Appfile")
            system("cat fastlane/Appfile | sed 's/^itc_team_name.*$/itc_team_name \"#{datacircle_ci['itc_team_name']}\"/' > fastlane/Appfile.tmp && mv fastlane/Appfile.tmp fastlane/Appfile")

            p "******************** SET DELIVERFILE **************************"

            system("cat fastlane/Deliverfile | sed 's/^app_identifier.*$/app_identifier \"#{bundle_id}\"/' > fastlane/Deliverfile.tmp && mv fastlane/Deliverfile.tmp fastlane/Deliverfile")

            p "******************** SET MATCHFILE **************************"

            system("cat fastlane/Matchfile | sed 's/^git_branch.*$/git_branch \"#{dataconfig['package_id'].upcase}\"/' > fastlane/Matchfile.tmp && mv fastlane/Matchfile.tmp fastlane/Matchfile")
            system("cat fastlane/Matchfile | sed 's/^team_id.*$/team_id \"#{datacircle_ci['team_id']}\"/' > fastlane/Matchfile.tmp && mv fastlane/Matchfile.tmp fastlane/Matchfile")
            system("cat fastlane/Matchfile | sed 's/^app_identifier.*$/app_identifier \"#{bundle_id}\"/' > fastlane/Matchfile.tmp && mv fastlane/Matchfile.tmp fastlane/Matchfile")


            p "******************** SET ScreenShots **************************"

            p  dataconfig['splash_url']
            system("curl -o ./hellocrowd/Images.xcassets/splash.imageset/Splashscreen.png  #{dataconfig['splash_url']}")
            url = "https://us-central1-project-2248398084637651990.cloudfunctions.net/api/apps/#{params[:package_id]}/screenshot"
            uri = URI.parse(url)
            response = Net::HTTP.get_response(uri)
            obj = JSON.parse(response.body)
            image_name = [ "iPhoneXSMax-1.png" ,"iPhoneXSMax-2.png", "iPhoneXSMax-3.png",
                               "iPhone6Plus-1.png" ,"iPhone6Plus-2.png", "iPhone6Plus-3.png",
                               "iPadPro2nd3rdGen-1.png" ,"iPadPro2nd3rdGen-2.png" ,"iPadPro2nd3rdGen-3.png"
                             ]
                length = obj['links'].length + 1
            for a in 1...length do
                 system("curl -o fastlane/screenshots/en-US/#{image_name[a-1]}  #{obj['links'][a-1]} ")
            end

            return [datacircle_ci, dataconfig]

            else
             return [ nil , nil ]
             end
    end

      def self.description
        "Set app configuration dynamically."
      end

      def self.details
        # Optional:
        # this is your chance to provide a more detailed description of this action
        "Performs custom actions."
      end

      def self.available_options
        # Define all options your action supports.

        # Below a few examples
        [
          FastlaneCore::ConfigItem.new(key: :package_id,
                                       env_name: "PACKAGE ID", # The name of the environment variable
                                       description: "PACKAGE ID for HelloCrowdAction", # a short description of this parameter
                                       default_value: "HELLOCROWD"
                                       )
        ]
      end

                def self.output
        # Define the shared values you are going to provide
        # Example
        [
          ['HELLO_CROWD_CUSTOM_VALUE', 'A description of what this value contains']
        ]
      end

      def self.return_value
        :string
      end

      def self.authors
        ['Github: Snuff']
      end

      def self.is_supported?(platform)
        platform == :ios
      end
    end
  end
end