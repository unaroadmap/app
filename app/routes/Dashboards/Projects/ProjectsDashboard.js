import React from 'react';
import {
    Container
} from './../../../components';
import { setupPage } from './../../../components/Layout/setupPage';

const ProjectsDashboard = () => (
    <Container>
        <h1>Bem vindo a UnaRoadMap</h1>
    </Container>
);

export default setupPage({
    pageTitle: 'Projects Dashboard'
})(ProjectsDashboard);