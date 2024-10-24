import photo from '../assets/profile.png';
import authors from '../assets/auther.svg';
import next from '../assets/next.svg';
import mention from '../assets/mention.svg';
import communtiy from '../assets/community.svg';
import deactivate_icon from '../assets/delete_account.svg';

import settings_icon from '../assets/settings-gray.svg';
import { SettingsItem } from '../Components/SettingsItem/SettingsItem';

export const Settings = () => {
  return (
    <div className="select-none py-4">
      <div className="relative flex w-full items-center justify-center text-xl font-medium text-text-secondary">
        Settings
        <div className="absolute right-0">
          <img
            src={settings_icon}
            alt="settings"
            className="h-7 w-7 cursor-pointer rounded-full p-1 hover:bg-secondary"
            draggable="false"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4 py-4">
        <div className="pl-4 text-lg font-medium text-text-primary">
          Profile Settings
        </div>
        <div>
          <SettingsItem
            image={photo}
            className={''}
            imgClassName={'w-8'}
            label={'Edit Profile'}
            next={next}
            nextClassName={
              'rounded-full bg-bg-primary p-1 hover:bg-gray-300 transition-all duration-100 ease-in-out'
            }
          />
          <SettingsItem
            image={authors}
            className={'p-2'}
            imgClassName={'w-5'}
            label={'Register as author'}
            next={next}
            nextClassName={
              'rounded-full bg-bg-primary p-1 hover:bg-gray-300 transition-all duration-100 ease-in-out'
            }
          />
        </div>
      </div>

      <div className="flex flex-col gap-4 py-4">
        <div className="pl-4 text-lg font-medium text-text-primary">
          Account Settings
        </div>
        <div>
          <SettingsItem
            image={photo}
            className={''}
            imgClassName={'w-8'}
            label={'Change password'}
            next={next}
            nextClassName={
              'rounded-full bg-bg-primary p-1 hover:bg-gray-300 transition-all duration-100 ease-in-out'
            }
          />
          <SettingsItem
            image={deactivate_icon}
            className={'p-2'}
            imgClassName={'w-5'}
            label={'Account Deactivation / Deletion'}
            next={next}
            nextClassName={
              'rounded-full bg-bg-primary p-1 hover:bg-gray-300 transition-all duration-100 ease-in-out'
            }
          />
        </div>
      </div>

      <div className="flex flex-col gap-4 py-4">
        <div className="pl-4 text-lg font-medium text-text-primary">
          Notification Settings
        </div>
        <div>
          <SettingsItem
            image={mention}
            className={'p-2'}
            imgClassName={'w-5'}
            label={'Mentions and comments'}
            next={next}
            nextClassName={
              'rounded-full bg-bg-primary p-1 hover:bg-gray-300 transition-all duration-100 ease-in-out'
            }
          />
          <SettingsItem
            image={communtiy}
            className={'p-2'}
            imgClassName={'w-5'}
            label={'Group / community activity'}
            next={next}
            nextClassName={
              'rounded-full bg-bg-primary p-1 hover:bg-gray-300 transition-all duration-100 ease-in-out'
            }
          />
        </div>
      </div>
    </div>
  );
};
