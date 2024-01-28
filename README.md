# ShyFox   
a theme for Firefox to make it look and somewhat behave like [this](https://www.reddit.com/r/FirefoxCSS/comments/195n51c/mightyfox_an_idea_need_help_to_build_it_up/) concept   
------
![изображение](https://github.com/Naezr/ShyFox/assets/95460152/4f5caccc-f8c4-4d2a-904c-a5cc4569e1bc)
------

## Showcase
<details><summary>GIF</summary>
      
![Urlbar](https://github.com/Naezr/ShyFox/assets/95460152/c33f4e0c-8534-454e-91e3-4cea646bfa52)
![Toolbar](https://github.com/Naezr/ShyFox/assets/95460152/a70c6039-ca40-4d80-b64a-e143d614147f)
![Tabs sidebar](https://github.com/Naezr/ShyFox/assets/95460152/72b6476b-7174-4374-9873-2040cb83c104)
![Menubar](https://github.com/Naezr/ShyFox/assets/95460152/b908864b-23e2-4df6-ba14-f134d90e09e5)
![Customization](https://github.com/Naezr/ShyFox/assets/95460152/8c7df8c4-2c6d-4c5a-863c-05df1fe4dc26)
    
</details>

### Install

 - Install [fx-autoconfig](https://github.com/MrOtherGuy/fx-autoconfig), [Sidebery](https://addons.mozilla.org/en-US/firefox/addon/sidebery), [Userchrome toggle](https://addons.mozilla.org/en-US/firefox/addon/userchrome-toggle), [Adaptive Tab Bar Color](https://addons.mozilla.org/en-US/firefox/addon/adaptive-tab-bar-colour).    
 - Put `userChrome.css` and `JS` into your `chrome` directory.
   <details><summary>Chrome folder file hierarchy</summary>
           
         chrome        
         ├ JS     
         │ └ move-buttons.uc.js     
         ├ utils       
         │ └ important files for fx-autoconfig work     
         └ userChrome.css

        (You can delete `CSS` and `resources` folders because it just examples for fx-autoconfig developers. This folders don't used in this theme)
   </details>
 - Import `sidebery/sidebery-data.json` into Sidebery (Sidebery settings > help > import addon data).
 - Set first toggle prefix to ` ` and second toggle prefix to `  ` in Userchrome toggle settings and customize keybinds to what you want. <details><summary>Userchrome toggle settings</summary> ![изображение](https://github.com/Naezr/ShyFox/assets/95460152/c9effdee-a8b2-4636-a52c-185ceffb96a5) </details>
 - Recomended settings for Adaptive Tab Bar Color (you can experiment with it) <details><summary>Adaptive Tab Bar Color settings</summary>  ![изображение](https://github.com/Naezr/ShyFox/assets/95460152/657a3809-ba99-4ebb-87fd-536762621bf4)  </details>

### Additional information     
 - If for some reason you can't install fx-autoconfig (for example on linux it can be difficult), you can use the theme without it, but then the extensions, menu and overflow buttons will be on the bottom panel with urlbar.
 - Many things are hardcoded for use in conjunction with Sidebery. So if any other extension is open in sidebar, many changes to the theme are disabled so you can access the tabs and the sidebar header so you can enable Sidebery back.

### Features    

 - Very shy and clean UI without unnecessary things to distract you from interacting with the website.
 - More like the Arc browser for windows than Arc for windows itself at the moment. (If you want something more like Arc, try [arcticfox](https://github.com/sirlan-ff00ff/arcticfox-theme))
 - Cool sliding toolbars
 - Customizing menu support

### To-Do

 - Make the background colors less flat, add a glow, a blur or something like that
 - Do something about the bookmarks toolbar, right now it doesn't work at all
 - Maybe replace the protruding edges of the hidden panels with something more interesting

### Thanks

 - [MrOtherGuy](https://github.com/MrOtherGuy)   Thanks for the fx-autoconfig and the repository with cool css's.
 - [MightyFox concept](https://www.reddit.com/r/FirefoxCSS/comments/195n51c/mightyfox_an_idea_need_help_to_build_it_up/)    Thanks for the cool concept and main idea
 - [arcticfox-theme](https://github.com/sirlan-ff00ff/arcticfox-theme)     I used this theme as a base to create my own, but there was a bit of commonality left in the process.
