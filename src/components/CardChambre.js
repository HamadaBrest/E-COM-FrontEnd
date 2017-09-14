import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBlock,
    CardTitle, CardSubtitle, Button, Input, Row, Col, Alert, Badge
} from 'reactstrap';
import '../components/CardChambre.css'

export default class CardChambre extends Component {

    constructor(props) {
        super(props)

        this.handleClickAjouter = this.handleClickAjouter.bind(this)

    }

    handleClickAjouter(event) {
        //console.log(event)
        this.props.listenButton(event, this.props.prix, this.props.nomHotel, this.props.adresseHotel, this.props.nombreDadultes, this.props.nombreEnfants, this.props.nombreChambres, this.props.nombreLits)
    }


    render() {
        return (
            <div>
                <Card>
                    <CardImg top width="100%" src={this.props.src} alt="Chambre" />
                    <CardBlock>
                        <CardTitle>
                            <Row>
                                <Col md="9">
                                    {this.props.nomHotel}
                                </Col>
                                <Col md="3  ">
                                    <Badge color="info" pill>
                                        <strong>Hotel</strong>
                                    </Badge>{' '}
                                </Col>
                            </Row>

                        </CardTitle>
                        <CardSubtitle>

                            <br />
                            <Row>
                                <Col>Adresse : </Col>
                            </Row>
                            <Col><p>{this.props.adresseHotel}</p></Col>
                            <br />
                            <Row>
                                <Col>
                                    Nombre de chambres
                                </Col>
                                <Col>
                                    <p>{this.props.nombreChambres}</p>
                                </Col>
                            </Row>
                            <br />
                            <Row>
                                <Col>Nombre de lits : </Col>
                                <Col><p>{this.props.nombreLits}</p></Col>
                            </Row>
                            <br />
                        </CardSubtitle>

                        <CardSubtitle>
                            <Row>
                                <Col>
                                    Nombre d'adultes
                                </Col>
                                <Col>
                                    <p>{this.props.nombreDadultes}</p>
                                </Col>
                            </Row>
                        </CardSubtitle>
                        <br />

                        <CardSubtitle>
                            <Row>
                                <Col>
                                    Nombre d'enfants
                                </Col>
                                <Col>
                                    <p>{this.props.nombreEnfants}</p>
                                </Col>
                            </Row>
                        </CardSubtitle>


                        <CardText>

                            <Row>
                                <Col md="3">Prix :</Col>
                                <Col>
                                    <h3><Badge color="primary" pill>
                                        <strong>€ {this.props.prix}</strong>
                                    </Badge>{' '}</h3>
                                </Col>
                            </Row>

                        </CardText>
                        <Button color="danger" onClick={this.handleClickAjouter}>
                            <img src="https://www.dmanetwork.com/share/dma/gfx/icon-add-grey.png"
                                height="20" width="20" />
                            Enregistrer
                            </Button>
                        <Button color="success">
                            <Row>
                                <Col md="1">
                                    <img src="https://icon-icons.com/icons2/933/PNG/512/shopping-cart_icon-icons.com_72552.png"
                                        height="20" width="20" />
                                </Col>
                                <Col>
                                    Reserver
                                </Col>
                            </Row>
                        </Button>
                    </CardBlock>
                </Card>
            </div>
        )
    }

}
