import React, { Component } from 'react';
import LogoLabkom from '../images/logo.png';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
import Logo from '../images/logo.png';
import SuratBebasLabkom from '../documents/SURAT-BEBAS-LABKOM.doc';
import SuratPinjamLab from '../documents/SURAT-PINJAM-RUANG-DILUARJAM.doc';
import SuratPinjamLCD from '../documents/SURAT-PINJAM-LCD.doc';

export default class Header extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
           isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <Navbar color="dark" dark expand="md">
                <NavbarBrand href="/">
                    <img src={LogoLabkom} height="30" className="d-inline-block align-top mr-3" alt="Logo LABKOM" />
                    LABKOM FMIPA UNS
                </NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/" >
                                Home
                            </NavLink>
                        </NavItem>

                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Download
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem href={Logo}>
                                    Logo
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem href={SuratBebasLabkom}>
                                    Surat Bebas Labkom
                                </DropdownItem>
                                <DropdownItem href={SuratPinjamLab}>
                                    Surat Peminjaman Lab
                                </DropdownItem>
                                <DropdownItem href={SuratPinjamLCD}>
                                    Surat Peminjaman Alat
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}