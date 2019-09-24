import React, { Component } from 'react';
import { Container, Table } from 'reactstrap';
import Pdf from '../documents/PENGUMUMAN-MAGANGER-2019.pdf';

export default class Oprec extends Component {

    data = () => {
        return [
            {
                nama: "Ilyas Mahfud",
                jurusan: "S1 Matematika",
            },
            {
                nama: "Muhammad Nur Afif Na'im",
                jurusan: "D3 Teknik Informatika"
            },
            {
                nama: "Prayoga Yuditama",
                jurusan: "D3 Teknik Informatika"
            },
            {
                nama: "Helmy Fauzi",
                jurusan: "D3 Teknik Informatika"
            },
            {
                nama: "Mochammad Nibraasuddiin A.Z.",
                jurusan: "S1 Informatika"
            },
            {
                nama: "Aziz Dafa Putra",
                jurusan: "S1 Informatika"
            }
        ];
    }

    render() {
        return(
            <Container className="mt-5">
                <h3 className="text-center">
                    PENGUMUMAN PENERIMAAN MAGANGER LABKOM FMIPA UNS 2019
                </h3>
                <p>
                    Daftar nama berikut merupakan mahasiswa yang diterima menjadi Maganger LABKOM FMIPA UNS tahun 2019.
                    Selamat bagi yang sudah diterima, selanjutnya akan diadakan rapat perdana untuk pemberian informasi
                    lebih lanjut. Bagi yang belum diterima, jangan menyerah. Untuk surat pengumuman dapat di download <a href={Pdf}>disini</a>.
                </p>
                <Table striped bordered hover responsive size="sm">
                    <thead className="thead-dark">
                        <tr className="text-center">
                            <th scope="col">No.</th>
                            <th scope="col">Nama</th>
                            <th scope="col">Jurusan</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.data().map((item, key) =>
                        <tr key={key}>
                            <td>{key + 1}.</td>
                            <td>{item.nama}</td>
                            <td className="text-center">{item.jurusan}</td>
                        </tr>
                    )}
                    </tbody>
                </Table>
            </Container>
        );
    }
}