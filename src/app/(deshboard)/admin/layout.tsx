import AdminNavBar from "./AdminNavBar";
import SubAdminNavBar from "./SubAdminNavBar";
import SuperAdminNavBar from "./SuperAdminNavBar";
import AdminLogin from "@/app/components/AdminLogin";
import { getCurrentUser } from "../../../../actions/getCurrentUser";
import { Image } from "react-bootstrap";
import 'react-quill/dist/quill.snow.css';

export const metadata = {
    title: 'Career Definer Admin',
    description: 'Career Definer Admin Dashboard'
};

const AdminLayout = async({ children }: { children: React.ReactNode }) => {

                const currentUser = await getCurrentUser();
    if (!currentUser) {
        return <AdminLogin />;
    }
    else if (currentUser.role === 'SUPERADMIN') {
        return (
            <div>
                <SuperAdminNavBar />
                {children}
            </div>
        );
    }
    else if (currentUser.role === 'SUBADMIN') {
        return (
            <div>
                <SubAdminNavBar />
                {children}
            </div>
        );
    }
     else if (currentUser.role === 'ADMIN') {
        return (
            <div>
                <AdminNavBar />
                {children}
            </div>
        );
    } 
    
    else {
        return (
            <div>
               <Image src="/access.svg" alt="access denied" fluid />
            </div>
        );
    }
};

export default AdminLayout;
