import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'TarjetaWebPartStrings';
import Tarjeta from './components/Tarjeta';
import { ITarjetaProps } from './components/ITarjetaProps';

export interface ITarjetaWebPartProps {
  urlImagen: string;
  titulo: string;
  texto: string;
}

export default class TarjetaWebPart extends BaseClientSideWebPart<ITarjetaWebPartProps> {

  public render(): void {
    const element: React.ReactElement<ITarjetaProps> = React.createElement(
      Tarjeta,
      {
        urlImagen: this.properties.urlImagen,
        titulo: this.properties.titulo,
        texto: this.properties.texto,
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('urlImagen', {
                  label: strings.DescriptionFieldurlImage
                }),
                PropertyPaneTextField('titulo', {
                  label: strings.DescriptionFieldtitulo
                }),
                PropertyPaneTextField('texto', {
                  label: strings.DescriptionFieldtexto,
                  multiline: true
                }),
              ]
            }
          ]
        }
      ]
    };
  }
}
