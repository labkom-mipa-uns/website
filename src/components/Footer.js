import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Logo from '../images/logo.png';
import SuratBebasLabkom from '../documents/SURAT-BEBAS-LABKOM.doc';
import SuratPinjamLab from '../documents/SURAT-PINJAM-RUANG-DILUARJAM.doc';
import SuratPinjamLCD from '../documents/SURAT-PINJAM-LCD.doc';

export default class Footer extends Component {
    render() {
        return (
            <footer className="mt-auto py-3">
                <hr />
                <Container>
                    <Row>
                        <Col sm="3">
                            <h5>Tentang</h5>
                            <ul className="list-unstyled small">
                                <li>Visi &amp; Misi</li>
                                <li><a href="/tentang/sop">Standar Operasional Prosedur</a></li>
                                <li>Fasilitas</li>
                                <li>Servis &amp; Perawatan</li>
                                <li>Asisten &amp; Maganger</li>
                                <li>Kontak</li>
                            </ul>
                        </Col>

                        <Col sm="3">
                            <h5>Laboratorium</h5>
                            <ul className="list-unstyled small">
                                <li>Komputasi Dasar</li>
                                <li>Multimedia</li>
                                <li>Rekayasa Perangkat Lunak</li>
                                <li>Pemrograman Dasar</li>
                                <li>Pemrograman Lanjut</li>
                                <li>Jaringan</li>
                                <li>Mikrokontroller</li>
                                <li>Studio</li>
                            </ul>
                        </Col>

                        <Col sm="3">
                            <h5>Download</h5>
                            <ul className="list-unstyled small">
                                <li><a href={Logo}>Logo</a></li>
                                <li><a href={SuratBebasLabkom}>Surat Bebas Labkom</a></li>
                                <li><a href={SuratPinjamLab}>Surat Peminjaman Lab</a></li>
                                <li><a href={SuratPinjamLCD}>Surat Peminjaman Alat</a></li>
                            </ul>
                        </Col>

                        <Col sm="3">
                            <h5>Lainnya</h5>
                            <ul className="list-unstyled small">
                                <li><a href="/oprec/2019/1/pengumuman">Open Recruitment Maganger 2019</a></li>
                                <li>Blog &amp; Berita</li>
                                <li>API Endpoints</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
                <div className="text-center">
                    LABKOM FMIPA UNS &copy; 2019
                </div>
            </footer>
        );
    }
}