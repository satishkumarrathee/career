import { IconType } from "react-icons";

interface AdminNavItemProps{
icon:IconType;
selected?:boolean;
label:string
}

const AdminNavItem:React.FC<AdminNavItemProps> = ({selected, icon:Icon, label}) => {
    return (  <div className={`d-flex text-center justify-content-center border-bottom align-items-center p-3 ${selected?"text-light bg-primary":"border-none"} `}>
     <Icon size={20}/>   
     <div className="mx-2">{label}</div>
    </div> );
}
 
export default AdminNavItem;