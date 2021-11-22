import React from 'react';
import {Page} from 'catalog';
import './designsystemstyles.css'

const iframe = '<iframe class="iframe-style" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FTaVA23ukHX7zh155i9XMqq%2FOpenInfra-Design-System%3Fnode-id%3D19%253A1187" allowfullscreen></iframe>';

export default () => (
  <Page>
    <div dangerouslySetInnerHTML={{__html: iframe}} />
  </Page>
);