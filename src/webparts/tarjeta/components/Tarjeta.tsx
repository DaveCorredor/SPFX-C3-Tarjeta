import * as React from 'react';
import styles from './Tarjeta.module.scss';
import { ITarjetaProps } from './ITarjetaProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class Tarjeta extends React.Component<ITarjetaProps, {}> {
  public render(): React.ReactElement<ITarjetaProps> {
    return (
      <div className={styles.container}>
        <div className={styles.sectionImg}>
              <img src={this.props.urlImagen} alt="Imagen" />
            </div>
            <div className={styles.sectionText}>
              <div className={styles.sectionDescription}>
                <h1>{this.props.titulo}</h1>
                <p>{this.props.texto}</p>
              </div>
            </div>
          </div>
    );
  }
}
