# ShyFox 3.8.1

<div>
 <a href='https://github.com/Naezr/ShyFox/stargazers'><img src='https://img.shields.io/github/stars/Naezr/ShyFox?style=social'></a>
 <a href='https://www.mozilla.org'><img src="https://img.shields.io/badge/Firefox-130-orange?logo=firefox"></a>
 <a href='https://github.com/Naezr/ShyFox/commits'><img src="https://img.shields.io/github/last-commit/Naezr/ShyFox/main">
</a>
 <a href='https://github.com/Naezr/ShyFox/commits/nightly'><img src="https://img.shields.io/github/last-commit/Naezr/ShyFox/4.0-alpha?label=last%204.0%20commit&color=purple"></a>

</div>

<br/>

<details><summary>🚩 Release notes</summary>

<br/>

3.8.1:
- Added mono icons for Auto Tab Discard, Midnight Lizard and Video Download Helper
- Changed sidebar invisible symbol

3.8:
- Migrating to invisible titleprefixes & new Userchrome Toggle
- `about:debugging` page now shrinks at small window width
- Added `about:config` option to make context menus larger
- Some bugfixes

3.7.3:
- New tab colors rework
- Added Privacy Badger svg icon
- Redesigned logic of pinned tabs

3.7.2:
- Native themed window control buttons can now be enabled for Linux
- Accent color can be equated to fill color of toolbar buttons
- Changed colors of some context menus
- Maybe fixed some bugs

3.7.1:
- Window brightness now reduces when window is inactive
- Sidebery tab dragging has been fixed
- Istall guide rework
- Another small fixes

3.7:
- The theme now responds adequately to the missing Sidebery
- Added the ability to enable and disable native tabs when missing Sidebery (not for regular use)
- Added some icons in some places
- Весь добавленный темой текст переведён на русский
- Small fixes

3.6:
- Searcbar can now be putted into vertical toolbar
- Bookmark toolbar items can be placed on a vertical toolbar and will be a single button
- The wallpaper in a new tab now depends on the theme. `wallpaper.png` for dark theme and `wallpaper-light.png` for light theme
- Some context menu items now have icons (disabled by default)
- Added bunch of `about:config` settings

3.5.1:
- Ton of small paddings/margins fixes
- Print dialog fix
- Sidebery drag-n-drop fix for Linux

3.5:
- Moved Sidebery styles from its own settings to `userContent.css`
- Splitting `userContent.css` to separate files, just like is it in `userChrome.css`
- To change the accent color, you now only need to change it in `shy-variables.css`. Same with the other variables
- Some little improvements

3.4:
- Added Clean Mode
- README redesign
- Some Fixes

3.3.2:
- Integrating screenshot tool with the theme (ctrl + shift + s)

3.3.1:
- Fake tab loading progress on navbar

3.3:
- Hidden panels no longer pop out if the Firefox View button located on them is active
- Downloads progress indicator on hidden right toolbar
- Using a bit of clownish code

3.2.5
- Applied accent color to Sidebery
- Better show/hide animations for panels
- Just small fixes

3.2.4:
- Notifications are now colored in the color of the theme
- Window controls are now positioned vertically when appropriate
- GTK window controls now adapt to theme colors
- Minor fixes and improvements

3.2.3:
- Added accent colors support
- Added rounded corners to Firefox settings page
- Instead of leaving one long pinned tab at the bottom, the pinned tabs in the last row are now grouped 4 at a time.
- Small bugfixes
 
[3.2.2](https://youtu.be/7lY8sna1B_Q?si=vdh6M2hZF1-GDH76):
- Rounded corners don't break from the blur on the site
- Increased hover hitboxes on hidden panels
- Added blur to new tab
 
3.2.1:
- Fix window controls on linux broken in Firefox 125
- Now if you hover over the right toolbar window controls are not highlighted

3.2:
- Code comments rework
- Enhanced readability
- Lot of bugfixes

3.1.2:
- Fixed transparent context menus in some places
- Bookmarks toolbar improvements
 
3.1.1: 
- Improved rounded corners
- Fixed notification panel

3.1:           
 - Panels in the hidden state are now floating and do not touch the window edge        
 - Findbar rework        
 - If you disable bookmarks toolbar all still look fine     

3.0:
 - Navigation bar now on top. I plan to add the ability to move it down like I did in version 2.0 but I don't want to delay this update any longer     
 - Bookmarks toolbar used now and putted above sidebar. Since it's quite short, it will be more convenient to use folders with short names and emoji instead of regular links         
 - Thin sidebar mode are removed. This mode was rather inconvenient and I didn't use it. Maybe I'll bring it back someday if someone asks for it         
 - All panels can be shown or hidden independently. Interestingly enough, I tried to implement it with various crutches for a long time, but nothing worked. It turned out that in userChrome Toggle settings it was possible to enable this functionality         

2.0 version still available [here](https://github.com/Naezr/ShyFox/tree/2.0-old)

<br/>

</details>

### Shy on surface, but heavy inside

<div align="center">

 <img width="50%" src='https://github.com/user-attachments/assets/4bc61095-887c-46c0-bc92-f5b296c9b90f'><img width="50%" src='https://github.com/user-attachments/assets/f7dddada-9378-4745-b276-f7d7b919f491'>
</div>
<div align="center">
 <img width="33%" src='https://github.com/user-attachments/assets/5fe8d381-7f28-48f0-b313-dd5640d9d0b9'><img width="33%" src='https://github.com/user-attachments/assets/a0f849f3-9b68-4639-bb4d-ab8c7bb2ef7e'><img width="33%" src='https://github.com/user-attachments/assets/a8a920a8-6fc4-479b-812e-ec8cbfb89518'>

</div>

🎦 [Video showcase](showcase.md) ; 💲 [Support project!](https://boosty.to/n2ezr) ; 🔊 [Telegram community](https://t.me/shyfoxchat)

## Usage

### Install

#### Step 1 - Download files

 - [Download](https://github.com/Naezr/ShyFox/archive/refs/heads/main.zip) and unzip theme files

#### Step 2 - Configure extensions

 - Install [Userchrome toggle Extended](https://addons.mozilla.org/firefox/addon/userchrome-toggle-extended/)
   
   <details><summary>Configure Userchrome toggle Extended</summary> 
   
   <br/>

   You need to turn on "Allow multiple styles to be active together" and turn on the first four toggles. If you will be using a popup, enable "Close popup after clicking toggle" and rename the toggles for convenience. Play with the rest of the settings as you wish. Make sure you click "Apply changes" button after all
   
   ![settings](https://github.com/user-attachments/assets/44b8702d-3a92-458d-8a2e-23b8e9e5703d)

   It would also be nice to customize the shortcuts for toggles. I recommend these:
   
   ![how-to](https://github.com/user-attachments/assets/d49948f5-4544-4070-a691-dc090f37b2d3)
   ![shortcuts](https://github.com/user-attachments/assets/bef9f1be-878e-4103-b1a9-0d171e9850bd)
   
   <br/>
   
   </details>    


 - Install [Sidebery](https://addons.mozilla.org/firefox/addon/sidebery)

   <details><summary>Configure Sidebery</summary> 
   
   <br/>
   
   If you used Sidebery before, it would be better to reset its settings to default.
   
   Then import `sidebery-settings.json` from unzipped theme files

   ![import](https://github.com/Naezr/ShyFox/assets/95460152/9961a813-d035-41cc-a6b4-146e20db45bc)

   <br/>
   
   </details>    

#### Step 3 - Moving files to a profile folder

 - Find your [profile directory](https://support.mozilla.org/kb/profiles-where-firefox-stores-user-data)
 - Close Firefox
 - Move `chrome` folder and `user.js` file from unzipped theme files into your [profile directory](https://support.mozilla.org/kb/profiles-where-firefox-stores-user-data)
  
   <details><summary>Profile folder structure</summary> 
      
      <br/>

      ```js
      {random characters}.default-release // Profile folder itself
      |_ chrome // chrome folder you put in
      |  |_ userChrome.css
      |  |_ userContent.css
      |  |_ ShyFox
      |  |  |_ ... // css files
      |  |_ icons
      |  |  |_ ... // svg icons
      |  |_ wallpaper.png
      |  |_ wallpaper-light.png
      |_ user.js // user.js file you put in
      |_ ... // a lot of files that was there before
      ```

      <br/>
      
      </details>    

 - Open Firefox

#### Step 4 - Buttons layout

 - Go to the customizing page. <img src="https://github.com/Naezr/ShyFox/assets/95460152/49d963a3-ccb4-48f9-8892-f206894315d7"> > More tools > Customize toolbar
  
 - Move buttons to something like that:
   
   <details><summary>Customizing menu</summary>
   
   <br/>
   
   ![layout](https://github.com/user-attachments/assets/a0524f8b-a16d-4753-bbbe-8aeccae25b2b)
   
   > NOTE                                 
   > If you don't add `Flexible Space` to the right toolbar, all buttons except `Menu` and `Extensions` will be centered on the panel
   
   <br/>
   
   </summary>

> [!NOTE]
> `System theme - auto` can cause problems in some cases
> 
> ![image](https://github.com/user-attachments/assets/5da52c2e-6b04-414a-b492-478a87b55f9a)



### Upgrading

 - Migrate from old version
   <details><summary>Migrate from 2.0 </summary>
   
      <br/>
      
      If you migrating from 2.0 you need delete fx-autoconfig.                     
      To do it, at first clean up `chrome` folder, at second delete `config.js` and `/defaults/prefs/config-prefs.js` from Firefox installation folder.           
      
   </details>

   <details><summary>Migrate from 3.4 </summary>
   
      <br/>
      
      If you migrating from 3.4 you need to reset Sidebery settings to default and import new ones.
         
   </details>

 - In other cases redo the installation steps 1 and 3 is enough for updating to new ShyFox version

### Customization

If you don't like the way the standard dark and light themes look, you can colorize your ShyFox!

There are three ways you can do it, choose one:
- Install some theme from [Firefox Add-ons](https://addons.mozilla.org/firefox/themes/) (not all will be well compatible)
- Color your browser yourself with [Firefox Color](https://addons.mozilla.org/firefox/addon/firefox-color/). Presets from screenshots: [pink](https://color.firefox.com/?theme=XQAAAAJcAQAAAAAAAABBqYhm849SCia48_6EGccwS-xMDPsqvXkIar4KdrumPOaRpoqhRtylP5n4Zfpe_3lMuBvgYbla0qT1QOs34oqRKJ__vCF6FKTI9i1CVNq28mKrlpbA743Cig4kGHR6iZLsbfXGx2TWrRs-AEYfywqkYrtkIsD-hNDUEskonC-PtUjDQO60hJRYxAdc_ciaOdJZ3qLR8-ltnNQrBrjrkZPS0cKdYESG19Ce108sPUJ-sxtRJheP8uifehJAtfT_U_CMAA), [turquoise](https://color.firefox.com/?theme=XQAAAAJgAQAAAAAAAABBqYhm849SCia48_6EGccwS-xMDPrv2Sw35312EPwz49WPR2-KqLVciULUNG8hT47EAt7OFG0PM9EP_FOrqm0ZcrcuiqO7AJ4ZtOtYZJYmJW2UQbLGqUwsx5a1luSAeWzbTYBr_wq9rgHinuRP90rQNt7qFSEFpoA_QEVgntqma7ntnbh1n4ffmSGvCvZINPxUCniDpGX529KAsQ3OEifjH-k0NSutAReuloDG_oDBQO0f3f3mdUhny4nuWQSUjTHVzc480xP-PnQ6), [private](https://color.firefox.com/?theme=XQAAAAJgAQAAAAAAAABBqYhm849SCia48_6EGccwS-xMDPsQa-obYNsLXtQH-LkSl-xiFvguLlbVAytJ7iSRZYDjI5M0HGJIVok5YY7sQJYDNqALkbhYuNd7GLBtffJP_WihaR82B9eSNM5B_AwFPXi9jAhOGSVHrux-aPHsNExZwN_G33gbtzlHrsaZ6mQVS0iF5xGMJ7hAHNnY-o-q3_nklkOvFpHlzDrKB7504aWtuHtKFi5DvcCgNYsdPEE_Pom2287flglmiD3RyZ7nv59EheVP_9zDOgA)
- Install the [Adaptive Tab Bar Color](https://addons.mozilla.org/firefox/addon/adaptive-tab-bar-colour/) extension and then ShyFox will adapt to the colors of the currently open website.
 
   <details><summary> Recommended Adaptive Tab Bar Color settings</summary>  
   
   <br/>
   
   ![settings](https://github.com/Naezr/ShyFox/assets/95460152/36480217-8209-4f7d-9d54-1a07f6f2752c)
   
   > NOTE                        
   > If you make the `Tab bar` and `Toolbar` `Background` colors the same, the pull-down hidden panels will have a transparent background.
   
   <br/>
   
   </details>

> [!NOTE]
> Use only one thing. Adaptive Tab bar Color and Firefox Color are not compatible 

You can change new tab wallpaper to your own. There is two wallpaper files in `chrome` folder:
 - `wallpaper.png` - for dark theme                   
 - `wallpaper-light.png` - for light theme             
  
To use one image for all themes just delete `wallpaper-light.png`.

You can change theme accent color. To do it change value of `--shy-accent-color` variable in `chrome/ShyFox/shy-variables.css`. You can also equate it to the fill color of the buttons. See options below

### Options

Settings that can be toggled via [about:config](https://support.mozilla.org/kb/about-config-editor-firefox)

| Setting | true | false / not exist (default) |
| :--- | :--- | :--- |
| `shyfox.larger.context.menu` | Using large context menu | Using compact context menu |
| `shyfox.disable.floating.search` | Floating search disabled | Floating search enabled |
| `shyfox.disable.compact.unified.extensions` | Using default extensions menu | Using compact extensions menu |
| `shyfox.remove.window.controls` | `min` `max` `close` buttons removed at all | These buttons removed only in fullscreen |
| `shyfox.enable.ext.mono.toolbar.icons` | Supported* extensions get monochrome icons as toolbar buttons | Standard icons used |
| `shyfox.enable.ext.mono.context.icons` | Supported* extensions get monochrome icons as context menu items** | Standard icons used |
| `shyfox.enable.context.menu.icons` | Many context menu items get icons** | No icons in context menus |
| `shyfox.fill.accent.with.icons.fill.color` | Attempts to use icon fill color as accent | Using hardcoded accent |
| `shyfox.force.native.controls` (Linux only) | Attempts to use system theme for `min` `max` `close` buttons  | Adwaita icons used |

<details><summary>* - Supported extensions</summary>
   
   <br/>
   
   - Userchrome Toggle Extended - toolbar button (panels icon)
   - Bitwarden - both toolbar and context menu (+ submenu items)
   - uBlock Origin - both toolbar and context menu
   - Simple Translate - only context menu item
   - Dark Reader - toolbar button (moon icon)
   - Privacy Badger - toolbar button
   - Clear URLs - only context menu item (eraser icon)
   - Midnight Lizard - toolbar button
   - Auto Tab Discard - toolbar button
   - Video Download Helper - toolbar button and context menu item
   
   Feel free to suggest icons for other extensions
   
   <br/>
   
</details>

** - On macOS you need to disable native context menus to see icons. `widget.macos.native-context-menus` => `false`

## Overview

### Panels

The browser interface has been divided into three panels:
- On left - Sidebar - Just Sidebery. Functionality of this extension is incredible. It is in charge of managing tabs and bookmarks. Above the main sidebar is a small bookmarks bar.
- On top - Navbar - panel where you can find the address bar and everything related to it
- On right - Toolbar - a panel with customizable buttons

### Toggles

The core of the theme is the [Userchrome toggle Extended](https://addons.mozilla.org/firefox/addon/userchrome-toggle-extended/) extension. With the help of toggles added by it the main feature of this theme is realized.                           

| № | Name | Recommended shortcut |
| --- | --- | --- |
| 1 | Hide Sidebar | Ctrl + Alt + A |
| 2 | Hide Toolbar | Ctrl + Alt + D |
| 3 | Hide Navbar  | Ctrl + Alt + S |
| 4 | Clean Mode   | Ctrl + Alt + X |

Each of three panels has two states - visible and hidden. This state can be toggled independently for each panel.             

| Panel state | Image |
| :--- | --- |
| Visible | ![image](https://github.com/user-attachments/assets/1925a5a8-a5fc-4403-ade1-2e1949c576c5) |
| Hidden | ![image](https://github.com/user-attachments/assets/30c6dcab-0a4b-4a04-a29d-7cc7ad150a39) |
| Hidden (on hover) | ![image](https://github.com/user-attachments/assets/ce587abc-dea1-41d6-81bb-c8e4f5f489fe) |

The visible state is normal state, panel is just there on the screen. In hidden state panel moves out of the window border and a bar appears on the border, when hovering over it panel moves out. Note that panels in a hidden state can show useful information. The top bar will show the page load progress (not very accurate), and the right bar will show the file download progress (very accurate).

There is also a fourth toggle - Clean Mode. When Clean Mode is activated, the previous toggles are ignored and entire browser interface is hidden without any possibility to interact with it. Simply put, Clean Mode removes everything unnecessary, leaving you alone with the currently open website. Note that you can only exit it with a keyboard shortcut.                   

| Normal mode | Clean mode |
| --- | --- |
| ![image](https://github.com/user-attachments/assets/d32db474-d0d7-4884-9296-641d07df220f) | ![image](https://github.com/user-attachments/assets/bfcd916a-a7d3-4deb-8639-89bff00a0ada) |
| Sidebar and navbar hidden, toolbar visible. Hidden panels accesible on hover. | All panels hidden independent on previous three toggles. All panels are inaccessible. |

### Non-Sidebery mode

All tab management in ShyFox has been moved to Sidebery. And the sidebar in normal situations is completely given over to this wonderful extension. 

If the sidebar is closed, you'll see a notification with a red border saying "Open sidebar!". You should also see a red colored sidebar button somewhere. 

If sidebar is open but no Sidebery is there, the sidebar will take a slightly different shape, separating it's content from the main interface. This is where you can work with the built-in sidebars and extensions that open in the sidebar. In the sidebar header, you'll see a notification telling you that you should open Sidebery to work with tabs. If Sidebery is unavailable for some reason and you need to access tab management without it, you can find the "Enable native tabs" option in the sidebar header menu. Clicking on this item will enable the tab strip floating above the page content. In the same way you can turn it off. Native tabs are needed for emergencies, don't use this all the time.

| Default sidebar appearance | Sidebar closed | Not Sidebery oppened |
| --- | --- | --- |
| ![image](https://github.com/user-attachments/assets/4533178b-2e12-413f-8193-896597091a7e) | ![image](https://github.com/user-attachments/assets/b7d469cf-20c7-455b-9059-c0f8664b350e) | ![image](https://github.com/user-attachments/assets/ea8cf373-2a97-4187-8a30-bbd4e69d715b) |

| Native tabs toggle | Red sidebar button | Tooltip when dragging in edit menu |
| --- | --- | --- |
| ![image](https://github.com/user-attachments/assets/0822da79-a2d3-4ab9-9a0b-971419d8666d) | ![image](https://github.com/user-attachments/assets/1ccc0d62-6850-44da-b98c-d4eea1e0a6dd) | ![image](https://github.com/user-attachments/assets/fa5b761b-a188-4f6b-982d-8d63b257bba6) |

## Additional information     

 * The theme works and is only tested on the latest version of Firefox. Firefox-based browsers, ESR versions, or just older versions are not supported. It may work, but I am not responsible for it.
 * Support for macOS is limited. Theme works, but I personally can't test it there, because I don't have a mac. 

## Thanks

* [MrOtherGuy](https://github.com/MrOtherGuy) -  Thanks for the fx-autoconfig (not used here anymore) and the repository with cool css's.                  
* [MightyFox concept](https://www.reddit.com/r/FirefoxCSS/comments/195n51c/mightyfox_an_idea_need_help_to_build_it_up/)  -  Thanks for the cool concept and main idea.                     
* [arcticfox-theme](https://github.com/sirlan-ff00ff/arcticfox-theme)  -   I used this theme as a base to create my own, but there was a bit of commonality left in the process.                 
* [Lepton](github.com/black7375/Firefox-UI-Fix) - I gained a lot of knowledge by investigating this project. I also took the icons from there                      
* [minearchive](https://t.me/kartoshka_vpered) - That's where I got this wallpaper

Ты думал здесь что-то будет?
