# ShyFox   BETA

BETA NOTE: NOW WITHOUT ANY JS!!!!!!

A theme for Firefox that makes it something similar to Arc, but still has its own vision
------
![firefox_scl1iROLfK](https://github.com/Naezr/ShyFox/assets/95460152/3a29beaa-bfa9-49f8-b38f-a1b2cc12f3b5)

------

## Showcase
<details><summary>GIF</summary>

Window
![window](https://github.com/Naezr/ShyFox/assets/95460152/0a9f24b1-de38-42b9-a842-dd6197d1147d)
Fullscreen
![fullscreen](https://github.com/Naezr/ShyFox/assets/95460152/1f71cd04-d2fe-40ce-932b-8f4691aa8a2c)

</details>

### Install

1. Download theme files and [fx-autoconfig](https://github.com/MrOtherGuy/fx-autoconfig) (and read fx-autoconfig install instructions)     
2. Install theese extensions [Sidebery](https://addons.mozilla.org/en-US/firefox/addon/sidebery), [Userchrome toggle](https://addons.mozilla.org/en-US/firefox/addon/userchrome-toggle), [Adaptive Tab Bar Color](https://addons.mozilla.org/en-US/firefox/addon/adaptive-tab-bar-colour).     
3. Go to about: config and set `toolkit.legacyUserProfileCustomizations.stylesheets` to `true`.      
4. Close the browser and install fx-autoconfig following the instructions from its [page](https://github.com/MrOtherGuy/fx-autoconfig) on github
5. Put `userChrome.css`, `userContent.css` and `JS` into your `chrome` directory.
    <details><summary>Chrome folder file hierarchy</summary>
           
         chrome        
         ├ JS     
         │ └ move-buttons.uc.js     
         ├ utils       
         │ └ important files for fx-autoconfig work     
         ├ userChrome.css
         └ userContent.css

        (You can delete `CSS` and `resources` folders because it just examples for fx-autoconfig developers. This folders don't used in this theme)

   </details>
7. Launch Firefox and open Sidebery in sidebar
    <details><summary>Check if fx-autoconfig is installed</summary>

    A new menu item appears       
    ![изображение](https://github.com/Naezr/ShyFox/assets/95460152/2d4ef84a-0b3a-4630-a8ee-069b66107edf)

    </details>
  
8. Import `sidebery/sidebery-data.json` into Sidebery (Sidebery settings > help > import addon data).
9. Set first toggle prefix to `-` and second toggle prefix to `=` in Userchrome toggle settings and customize keybinds to what you want.       
    ( This is needed to switch sidebar modes )      <details><summary>Userchrome toggle settings</summary> !![изображение](https://github.com/Naezr/ShyFox/assets/95460152/855f9f9f-ed1c-49a6-b3d5-ccdc1ee56cab)
 </details>     
 
10. Recomended settings for Adaptive Tab Bar Color (you can experiment with it)

<details><summary>Adaptive Tab Bar Color settings</summary>  
    
![изображение](https://github.com/Naezr/ShyFox/assets/95460152/657a3809-ba99-4ebb-87fd-536762621bf4)  </details>

Optional. Rename your favorite wallpaper to `wallpaper.png` and put it into `chrome` folder. It will be shown on new tab page

### Additional information     
 - If for some reason you can't install fx-autoconfig (for example on linux it can be difficult), you can use the theme without it, but then the extensions, menu and overflow buttons will be on the bottom panel with urlbar.
 - Doesn't work on ESR and forks based on it. Probably will work when the next major ESR update is released.
 - You can choose how many pinned tabs there will be in one row. To do this, go to Sidebery settings > Styles editor. Select one of the following options there
   <details><summary>Styles editor</summary>
   
   ![Без имени](https://github.com/Naezr/ShyFox/assets/95460152/8be41969-a83f-4f1d-a530-8cb7aa6e2c47)
   
   </details>
 - You can choose which side the window control buttons will be on. By default they are on the right, but you can move them to the left. To do this, go to the /* WINDOW CONTROL BUTTONS */ section in the userChrome.css file. There you can do this:    
   <details><summary>userChrome.css</summary>
   
   ![Без имеdasdни](https://github.com/Naezr/ShyFox/assets/95460152/b3840862-7d17-47c1-ba15-dbd931654fa5)
   
   </details>
 
### Features    

 - Vertical tabs with multiple options (Always visible / Thin sidebar / Show on hover)
 - Takes up the least amount of space without taking away functionality
 - A floating search menu, roughly like the Arc browser. ( only appears when searching, if you just need to copy the url, the urlbar stays in the bottom bar )
 - Compact contextual menus and extensions menu
 - Slightly improved new tab page
 - Customization screen support ( Usually, themes so radically changing the interface completely break the customization screen )
 - Full screen support
 - The regular bookmark bar doesn't work, use Sidebery to manage your bookmarks. ( I don't know what can be done with the bookmark bar, if you have ideas, open a issue ) 

### To-Do

 - Make the background colors less flat, add a glow, a blur or something like that
 - Do something about the bookmarks toolbar, right now it doesn't work at all
 - Maybe replace the protruding edges of the hidden panels with something more interesting

### Thanks

 - [MrOtherGuy](https://github.com/MrOtherGuy)   Thanks for the fx-autoconfig and the repository with cool css's.
 - [MightyFox concept](https://www.reddit.com/r/FirefoxCSS/comments/195n51c/mightyfox_an_idea_need_help_to_build_it_up/)    Thanks for the cool concept and main idea
 - [arcticfox-theme](https://github.com/sirlan-ff00ff/arcticfox-theme)     I used this theme as a base to create my own, but there was a bit of commonality left in the process.
