import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

export default function SidebarAdmin(){
    return(
        <>
            <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
                <CDBSidebar textColor="#fff" backgroundColor="#333">
                    <CDBSidebarHeader>
                    <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
                        Dashboard Admin
                    </a>
                    </CDBSidebarHeader>

                    <CDBSidebarContent className="sidebar-content">
                        <CDBSidebarMenu>
                            <NavLink exact to="/" activeClassName="activeClicked">
                                <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink exact to="/admin/listproduct" activeClassName="activeClicked">
                                <CDBSidebarMenuItem icon="table">Product</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink exact to="/admin/listorder" activeClassName="activeClicked">
                                <CDBSidebarMenuItem icon="table">Order</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink exact to="/admin/listuser" activeClassName="activeClicked">
                                <CDBSidebarMenuItem icon="user">User</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink exact to="/hero404" target="_blank" activeClassName="activeClicked">
                                <CDBSidebarMenuItem icon="exclamation-circle">Logout</CDBSidebarMenuItem>
                            </NavLink>
                        </CDBSidebarMenu>
                    </CDBSidebarContent>

                    <CDBSidebarFooter style={{ textAlign: 'center' }}>
                    <div
                        style={{
                        padding: '20px 5px',
                        }}
                    >
                        Sidebar Footer
                    </div>
                    </CDBSidebarFooter>
                </CDBSidebar>
                </div>
        </>
    )
}