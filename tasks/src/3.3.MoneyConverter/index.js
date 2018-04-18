import React from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import './styles.css';


/**
    Допиши конвертер валют.
    - Если пользователь ввел значение в рублях, то количество евро обновляется согласно курсу
    - Если пользователь ввел значение в евро, то количество рублей обновляется согласно курсу
 */


const RUBLES_IN_ONE_EURO = 70;

function toRubles(euros){
    return euros*RUBLES_IN_ONE_EURO;
}

function toEuros(rubles){
    return rubles / RUBLES_IN_ONE_EURO;
}

class MoneyConverter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rubles: 0,
      euros: 0,
    };
  }

  render() {
    return (
      <div className="root">
        <div className="form">
          <h2>Конвертер валют</h2>
          <div>
            <span>&#8381;</span>
            <Money value={this.state.rubles} onChange={this.convertRublesToEuros}/>
            &mdash;
            <Money value={this.state.euros} onChange={this.convertEurosToRubles}/>
            <span>&euro;</span>
          </div>
        </div>
      </div>
    );
  }

  convertEurosToRubles = event => {
    const value = extractNumber(event.target.value);
    let changed = toRubles(value);
    this.setState({rubles: changed, euros: value});
  }

  convertRublesToEuros = event => {
    const value = extractNumber(event.target.value);
    let changed = toEuros(value);
    this.setState({euros: changed, rubles: value});
  }

  
}

function Money(props) {
    return (
      <input type="text" value={props.value} onChange={props.onChange} />
    );
}

Money.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
}


function extractNumber(value) {
  return +(value.replace(/^0+/g, '').replace(/[^0-9]/g, ''));
}


ReactDom.render(<MoneyConverter />, document.getElementById('app'));


/**
    Подсказки:
    - Сейчас каждый компонент Money хранит свое значение в собственном состоянии,
      чтобы конвертер работал, нужно уметь обновлять значение извне, поэтому нужно получать его из props.
    - В MoneyConverter наоборот надо создать состояние, которое будет хранить значения в обеих валютах.
      Таким образом ты сделаешь Lift State Up.
    - Заметь, что компонент Money теперь не содержит состояние и его можно переделать в функциональный компонент.
 */