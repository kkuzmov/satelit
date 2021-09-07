export function toggleNav(navClass, iconClass, setNavClass, setIconClass){
  navClass == 'navVisible' ? setNavClass('navHidden') : setNavClass('navVisible')
  iconClass == 'iconDefault' ? setIconClass('iconRotated') : setIconClass('iconDefault')
}