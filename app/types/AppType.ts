 export type SideBarMenuItem = {
     id: number;
      name : string;
      isSelected : boolean
 }
 
 export type AppType = {
    openSideBarObject: {
      openSideBar: boolean;
      setOpenSideBar: React.Dispatch<React.SetStateAction<boolean>>;
    };
  

  sideBarMenuObject : {
    sideBarMenu : SideBarMenuItem[];
    setSideBarMenu : React.Dispatch<React.SetStateAction<SideBarMenuItem[]>>
  }
};
