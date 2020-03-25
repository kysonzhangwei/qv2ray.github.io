(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{256:function(e,t,a){"use strict";a.r(t);var r=a(28),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"step-1-getting-qv2ray-distribution"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-1-getting-qv2ray-distribution"}},[e._v("#")]),e._v(" Step 1: Getting Qv2ray Distribution")]),e._v(" "),a("p",[e._v("To get started with Qv2ray, you should first obtain a release of Qv2ray.")]),e._v(" "),a("h2",{attrs:{id:"github-release-binary-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#github-release-binary-file"}},[e._v("#")]),e._v(" GitHub Release Binary File")]),e._v(" "),a("p",[e._v("Downloading stable release binary from "),a("a",{attrs:{href:"https://github.com/Qv2ray/Qv2ray/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("Qv2ray GitHub Release"),a("OutboundLink")],1),e._v(" is favored for "),a("strong",[e._v("Windows")]),e._v(" and "),a("strong",[e._v("macOS")]),e._v(" users. This is also suitable for Linux users where Qv2ray is not officially packaged in their distros, since they can use our "),a("strong",[e._v("AppImage")]),e._v(" releases.")]),e._v(" "),a("p",[e._v("Do as the follows:")]),e._v(" "),a("ol",[a("li",[e._v("Open "),a("a",{attrs:{href:"https://github.com/Qv2ray/Qv2ray/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("Qv2ray GitHub Release Page"),a("OutboundLink")],1),e._v(" in a web browser.")]),e._v(" "),a("li",[e._v("Choose a version from the releases. Or, optionally, you may use the "),a("a",{attrs:{href:"https://github.com/Qv2ray/Qv2ray/releases/latest",target:"_blank",rel:"noopener noreferrer"}},[e._v("Latest Release"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("li",[e._v("Choose in Assets according to your platform and download it! For example:\n"),a("ul",[a("li",[e._v("For Windows 64/32bit Users: "),a("code",[e._v("Qv2ray.VERSION.win-x64/x86.zip")])]),e._v(" "),a("li",[e._v("For Linux 64bit Users: "),a("code",[e._v("Qv2ray.VERSION.linux-x64.AppImage")])]),e._v(" "),a("li",[e._v("For macOS Users: "),a("code",[e._v("Qv2ray.VERSION.macOS-x64.tar.gz")])])])])]),e._v(" "),a("p",[e._v("Where "),a("code",[e._v("VERSION")]),e._v(" is the version of that release.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("Notes for Linux AppImage users")]),e._v(" "),a("p",[e._v("Although we have bundled "),a("code",[e._v("glibc")]),e._v(" and some basic C++ libraries into the "),a("strong",[e._v("AppImage")]),e._v(" package to support some old but supported distros, moving yourself to a newer version of Distro/OS is strongly recommended.")])]),e._v(" "),a("h2",{attrs:{id:"github-actions-artifact"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#github-actions-artifact"}},[e._v("#")]),e._v(" GitHub Actions Artifact")]),e._v(" "),a("p",[e._v("If you are fed up with the functionalities of stable versions and willing to try out new features in development, you may download artifacts from GitHub Actions:")]),e._v(" "),a("ol",[a("li",[e._v("Open "),a("a",{attrs:{href:"https://github.com/Qv2ray/Qv2ray/actions",target:"_blank",rel:"noopener noreferrer"}},[e._v("Qv2ray GitHub Actions Page"),a("OutboundLink")],1),e._v(" in your web browser.")]),e._v(" "),a("li",[e._v("Choose a recent and successful (displayed as ✔️) build and click on it. You should be taken to the detail page of that GitHub Build. Here's "),a("a",{attrs:{href:"https://github.com/Qv2ray/Qv2ray/commit/de88bfc69e50bf7c4ce034756720bf06df42612a/checks?check_suite_id=377218225",target:"_blank",rel:"noopener noreferrer"}},[e._v("an example"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("li",[e._v("Click on "),a("strong",[e._v("Artifacts")]),e._v(" drop-down menu to expand it, and then choose binaries according to your platform.")])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("You must login GitHub first to access GitHub Actions.")])]),e._v(" "),a("h2",{attrs:{id:"getting-from-package-control"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-from-package-control"}},[e._v("#")]),e._v(" Getting From Package Control")]),e._v(" "),a("h3",{attrs:{id:"arch-linux-or-arch-based-distros"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arch-linux-or-arch-based-distros"}},[e._v("#")]),e._v(" Arch Linux (or Arch-based distros)")]),e._v(" "),a("h4",{attrs:{id:"install-directly-from-archlinuxcn-recommended"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-directly-from-archlinuxcn-recommended"}},[e._v("#")]),e._v(" Install directly from archlinuxcn (recommended)")]),e._v(" "),a("p",[e._v("We have made ourselves into "),a("code",[e._v("archlinuxcn")]),e._v(" repository. If you are already using it, simply type in your terminal:")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" pacman -Syy qv2ray "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# or qv2ray-dev-git, see below.")]),e._v("\n")])])]),a("p",[e._v("And that shall be done.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("You may also want to install "),a("code",[e._v("v2ray")]),e._v(" package group to use system V2Ray core.")])]),e._v(" "),a("h4",{attrs:{id:"getting-from-aur-using-an-aur-helper"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-from-aur-using-an-aur-helper"}},[e._v("#")]),e._v(" Getting from AUR, using an AUR Helper")]),e._v(" "),a("p",[e._v("You may acquire officially maintained "),a("code",[e._v("PKGBUILD")]),e._v(" file from AUR (Arch User Repository, "),a("a",{attrs:{href:"https://aur.archlinux.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("AUR (en) - Home"),a("OutboundLink")],1),e._v("), which will instruct the build process of Qv2ray.")]),e._v(" "),a("p",[e._v("You may use an AUR helper such as "),a("code",[e._v("yay")]),e._v(", "),a("code",[e._v("yaourt")]),e._v(", "),a("code",[e._v("pikaur")]),e._v(" and so on to automatically handle the build process of AUR packages.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("NOTE")]),e._v(" "),a("p",[e._v("The following example is utilizing "),a("code",[e._v("yay")]),e._v(". For other AUR helpers, check the usage in respective documentations.")])]),e._v(" "),a("p",[e._v("First, you may try searching "),a("code",[e._v("qv2ray")]),e._v(" in AUR:")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("$ yay -Ss qv2ray\naur/qv2ray-dev-git "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1.99")]),e._v(".4.r47514d2-1 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("+2 "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.98")]),e._v("%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n     Qt cross platform v2ray GUI client "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("Dev branch build release"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\naur/qv2ray "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1.3")]),e._v(".8.0-1 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("+4 "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1.23")]),e._v("%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n     Qt cross platform v2ray GUI client\n")])])]),a("p",[e._v("Then, choose the adequate version of Qv2ray to install. There are two versions available:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Stable version")]),e._v(", with package name "),a("code",[e._v("qv2ray")]),e._v(". This package is built from the master branch of Git repository, and shall be stable enough for cautious users.")]),e._v(" "),a("li",[a("strong",[e._v("Development version")]),e._v(", with package name "),a("code",[e._v("qv2ray-dev-git")]),e._v(". This package is built from the dev branch of Git repository. Along with the newest features and improvements, there are potential risks for using an unstable distribution.")])]),e._v(" "),a("p",[e._v("Choose according to your actual situation. Here, we choose to install "),a("code",[e._v("qv2ray-dev-git")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("$ yay -S qv2ray-dev-git\n")])])]),a("p",[e._v("Qv2ray will be ready to use after finishing the command.")]),e._v(" "),a("h4",{attrs:{id:"getting-from-aur-the-hard-way"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-from-aur-the-hard-way"}},[e._v("#")]),e._v(" Getting from AUR, the hard way")]),e._v(" "),a("p",[e._v("You may not want to use an AUR helper to install Qv2ray from AUR. Then take a look at the following example.")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 1. Clone the AUR repository (`qv2ray-dev-git` as an example):")]),e._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://aur.archlinux.org/qv2ray-dev-git.git\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 2. Enter `PKGBUILD` folder:")]),e._v("\n$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" qv2ray-dev-git\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 3. Build Qv2ray:")]),e._v("\n$ makepkg -sf\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 4. Install the generated package after building:")]),e._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" pacman -U qv2ray-dev-git-v1.99.4.2550-1-x86_64.pkg.tar.zst\n")])])]),a("p",[e._v("You are done.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("The package filename ("),a("code",[e._v("qv2ray-dev-git-v1.99.4.2550-1-x86_64.pkg.tar.zst")]),e._v(") depends on the actual version of Qv2ray. It may differ on your machine, but that's not a problem.")])]),e._v(" "),a("h3",{attrs:{id:"opensuse"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#opensuse"}},[e._v("#")]),e._v(" openSUSE")]),e._v(" "),a("blockquote",[a("p",[e._v("Qv2ray is made available for openSUSE users from "),a("a",{attrs:{href:"https://build.opensuse.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("openSUSE Build Service"),a("OutboundLink")],1),e._v(" by "),a("a",{attrs:{href:"https://github.com/zzndb",target:"_blank",rel:"noopener noreferrer"}},[e._v("@zzndb"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("p",[e._v("Similar to AUR, there are two versions of Qv2ray available. You can choose according to your own flavor:")]),e._v(" "),a("ul",[a("li",[e._v("Stable: "),a("a",{attrs:{href:"https://build.opensuse.org/package/show/home:zzndb/Qv2ray",target:"_blank",rel:"noopener noreferrer"}},[e._v("Qv2ray"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("Preview: "),a("a",{attrs:{href:"https://build.opensuse.org/package/show/home:zzndb/Qv2ray-preview",target:"_blank",rel:"noopener noreferrer"}},[e._v("Qv2ray-preview"),a("OutboundLink")],1)])]),e._v(" "),a("h2",{attrs:{id:"getting-from-app-stores"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-from-app-stores"}},[e._v("#")]),e._v(" Getting from App Stores")]),e._v(" "),a("h3",{attrs:{id:"snapcraft"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#snapcraft"}},[e._v("#")]),e._v(" Snapcraft")]),e._v(" "),a("p",[e._v("Follow the instructions on our "),a("a",{attrs:{href:"https://snapcraft.io/qv2ray",target:"_blank",rel:"noopener noreferrer"}},[e._v("Snapcraft page"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"flathub"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flathub"}},[e._v("#")]),e._v(" Flathub")]),e._v(" "),a("ol",[a("li",[e._v("Set up Flatpak environment according to the "),a("a",{attrs:{href:"https://flatpak.org/setup/",target:"_blank",rel:"noopener noreferrer"}},[e._v("official documentation"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("li",[e._v("Install Qv2ray:")])]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("$ flatpak "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" com.github.Qv2ray\n")])])]),a("h2",{attrs:{id:"building-from-source"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#building-from-source"}},[e._v("#")]),e._v(" Building From Source")]),e._v(" "),a("p",[e._v("Please refer to "),a("a",{attrs:{href:"/en/hacking/manuallybuild"}},[e._v("Manually Build Qv2ray")]),e._v(" Page.")])])}),[],!1,null,null,null);t.default=s.exports}}]);