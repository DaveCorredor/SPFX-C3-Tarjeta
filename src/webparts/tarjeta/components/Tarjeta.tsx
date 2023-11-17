import * as React from 'react';
import styles from './Tarjeta.module.scss';
import { ITarjetaProps } from './ITarjetaProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class Tarjeta extends React.Component<ITarjetaProps, {}> {
  public render(): React.ReactElement<ITarjetaProps> {
    return (
      <div className={ styles.tarjeta }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.titulo)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
