import { mergeStyleSets } from "@fluentui/react";
import { Colors, Fonts } from "./utils/constants";
import desktopImage from './assets/images/image-product-desktop.jpg';
import mobileImage from './assets/images/image-product-mobile.jpg';

export const styles=mergeStyleSets({
  appContainer:{
    height:"100vh",
    backgroundColor:Colors.Cream,
    display:'flex',
    alignItems:'center'    
  },
  modalContainer:{
    backgroundColor:Colors.PureWhite,
    margin:"0 auto",
    borderRadius:"25px",
    "@media screen and (min-width:1400px)":{
      height:"60%",
      width:"50%"
    },
    "@media screen and (max-width:1400px)":{
      height:"95%",
      width:"95%"
    },
    "@media screen and (max-width:750px)":{
      height:"95%",
      width:"90%"
    }
  },
  modalContent:{
    height:"100%",
    display:'grid',
    "@media screen and (min-width:1400px)":{
      gridTemplate:"repeat(7,1fr) / repeat(3,1fr) .5fr repeat(3,1fr)"
    },
    "@media screen and (max-width:1400px)":{
      gridTemplate:"repeat(3,1fr) .5fr 1fr 2fr .5fr .5fr / repeat(7,1fr)"
    },
    "@media screen and (max-width:750px)":{
      gridTemplate:" 3fr .5fr 1fr 2fr repeat(2,1fr) / 1fr"
    }
  },
  productDetailsContainer:{
    display:'grid',
    padding:"5%",
    "@media screen and (min-width:1400px)":{
      gridRow:'1 / -1',
      gridColumn:"5 / -1",
      gridTemplate:".5fr 1fr repeat(2,1fr) .5fr .5fr / 1fr"
    },
    "@media screen and (max-width:1400px)":{
      gridRow:"4 / -1",
      gridColumn:"-1 / 1",
      gridTemplate:"repeat(3,1fr) .5fr 2fr repeat(2,1fr) / 1fr"
    },
    "@media screen and (max-width:750px)":{
      gridRow:"2 / -1",
      gridColumn:"-1 / 1",
      gridTemplate:"repeat(3,1fr) .5fr 2fr repeat(2,1fr) / 1fr",
      marginTop:"-15%"
    }
  },
  imageWrapper:{
    height:"100%",
    "@media screen and (min-width:1400px)":{
      gridRow:"-1 / 1",
      gridColumn:"1 / span 3"
    },
    "@media screen and (max-width:1400px)":{
      gridRow:"1 / span 3",
      gridColumn:"1 / -1"
    },
    "@media screen and (max-width:750px)":{
      gridRow:"1 / 2",
      gridColumn:"1 / 1"
    }
  },
  image:{
    objectFit:'cover',
    maxHeight:"100%",
    borderRadius:"15px 15px 0 0",
    "@media screen and (min-width:1400px)":{
      borderRadius:"15px 0 0 15px",
      content:`url(${desktopImage})`,
    },
    "@media screen and (max-width:750px)":{
      maxWidth:"100%",
      content:`url(${mobileImage})`,
    }
  },
  productType:{
    fontFamily:"Montserrat",
    ...Fonts.Medium,
    alignSelf:"center",
    "@media screen and (min-width:1400px)":{
    },
    "@media screen and (max-width:1400px)":{
      gridRow:"1 / 2",
      gridColumn:"1 / -1",
    },
    "@media screen and (max-width:750px)":{
      gridRow:"1 / 2",
    }
  },
  productTitle:{
    fontFamily:"Fraunces",
    ...Fonts.Large,
    lineHeight:"3rem",
    "@media screen and (min-width:1400px)":{
      gridRow:"2 / 3"
    },
    "@media screen and (max-width:1400px)":{
      gridRow:"2 / 3",
      gridColumn:"1 / -1"
    },
    "@media screen and (max-width:750px)":{
      gridRow:"2 / 3",      
    }
  },
 
  productDescription:{
    fontFamily:"Montserrat",
    ...Fonts.Medium,
    lineHeight:"2.5rem",
    alignSelf:"center",
    "@media screen and (min-width:750px)":{
      gridRow:"3 / 5"
    },
    "@media screen and (max-width:1400px)":{
      gridRow:"3 / 6",
      gridColumn:"1 / -1"
    },
    "@media screen and (max-width:750px)":{
      gridRow:"3 / 6"
    }
  },
  productPrice:{
    display:'grid',
    gridTemplate:"1fr / repeat(7,1fr)",
    alignItems:"center",
    "@media screen and (min-width:750px)":{
      gridRow:"5 / 6"
    },
    "@media screen and (max-width:1400px)":{
      gridRow:"6 / 7",
      gridColumn:"1 / -1"
    },
    "@media screen and (max-width:750px)":{
      gridRow:"6 / 7"
    },
  },
  mainPrice:{
    fontFamily:"Fraunces 9pt SemiBold",
    ...Fonts.FBold,
    color:Colors.DeepAquamarine,
    
  },
  productButton:{
    backgroundColor:Colors.DeepAquamarine,
    borderRadius:"15px",
    ...Fonts.Medium,
    color:Colors.PureWhite,
    fontWeight:"600",
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    "@media screen and (min-width:1400px)":{
      gridRow:"6 / 7",
      gridColumn:"1 / -1"
    },
    "@media screen and (max-width:1400px)":{
      gridRow:"7 / 8",
      gridColumn:"1 / -1"
    },
    "@media screen and (max-width:750px)":{
      gridRow:"7 / 8"
    },
    ":hover":{
      cursor:"pointer",
      backgroundColor:Colors.DeepAquamarineHover
    }
  },
  dropPrice:{
    ...Fonts.Small,
    fontFamily:"Montserrat",
    fontWeight:"600",
    textDecoration:'line-through',
    color:'rgba(0,0,0,0.6)',
    gridColumn:"3 / span 2"
  },
  cartIcon:{
    transform:'scale(1.5)'
  }
})