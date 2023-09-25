'use client'

import { Loading } from '@/libs/components/ban/loading/message';
import { useUserStore } from '@/libs/stores';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

type AdminLayoutProps = {
    children: React.ReactNode;
};

const AdminLayout = ({ children }: AdminLayoutProps) => {

    const router = useRouter();

    const userStore = useUserStore((state) => state.user);
    const accessToken = Cookies.get("bs_access_token");

    const [loading, setLoading] = useState(true);


    useEffect(() => {
        if (!accessToken || !userStore) {
            router.push("/");
        } else if (userStore?.rank > 3) {
            router.push("/");
        } else {
            setLoading(false);
        }
    }, [accessToken]);

    return (
        <>
            {!loading ? children : <Loading msg="FETCHING ADMIN DATA" />}
        </>
    )
}

export default AdminLayout;
