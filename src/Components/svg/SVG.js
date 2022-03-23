import SVGArrow from "./SVGArrow/SVGArrow";
import SVGCancel from "./SVGCancel/SVGCancel";
import SVGCircleArrow from "./SVGCircleArrow/SVGCircleArrow";
import SVGMenu from "./SVGMenu/SVGMenu";
import SVGCellPhone from "./SVGCellPhone/SVGCellPhone";
import SVGFacebook from "./SVGFacebook/SVGFacebook";
import SVGInstagram from "./SVGInstagram/SVGInstagram";
import SVGTwitter from "./SVGTwitter/SVGTwitter";

const SVG = (props)=>{
    console.log(typeof props.children)
    const type = props.children || '';

    const getSVG =()=>{
        if(typeof type == 'string'){
            switch(type.toLowerCase()){
                case 'menu':
                    return <SVGMenu />
                case 'cicle-arrow':
                    return <SVGCircleArrow />
                case 'cancel':
                    return <SVGCancel />
                case 'arrow':
                    return <SVGArrow />
                case 'cell-phone':
                    return <SVGCellPhone />
                case 'facebook':
                    return <SVGFacebook />
                case 'instagram':
                    return <SVGInstagram />
                case 'twitter':
                    return <SVGTwitter />
                default:
            }
        }
        return null;
    }

    return getSVG();
}
export default SVG;