import React, { Component } from 'react';
import { Container } from 'reactstrap';
import PinjamAlat from '../images/SOP-PINJAM-ALAT-DAN-LAB.jpeg';
import PinjamKunci from '../images/SOP-PINJAM-KUNCI.jpeg';

export default class Sop extends Component {

    render() {
        return(
            <Container className="mt-5">
                <div class="text-center">
                    <img src={PinjamAlat} class="img-fluid w-75 mb-5" alt="SOP Pinjam Alat dan Lab." />
                    <img src={PinjamKunci} class="img-fluid w-75" alt="SOP Pinjam Kunci Lab." />
                </div>
            </Container>
        );
    }
}