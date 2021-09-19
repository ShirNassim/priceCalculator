
import React, { useState } from "react";
import DiamondsList from './DiamondsList'
import AjaxService from '../services/AjaxService'
import Slider from './Slider'
import CustomSlider from './CustomSlider'
import Modal from './Modal'

function CalculatorForm(props) {
  const colorsList = [{ value: 0, label: 'D' }, { value: 1, label: 'E' }, { value: 2, label: 'F' }, { value: 3, label: 'G' }, { value: 4, label: 'H' }]

  const [weight, handleWight] = useState(0);

  const [carat, handleCarat] = useState(0);

  const [color, handleColor] = useState({ value: 0, label: 'D' });

  const [cut, handleCut] = useState('');

  const [clarity, handleClarity] = useState('');

  const [price, handlePrice] = useState(0);

  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);


  const onSubmit = (e) => {
    e.preventDefault();
    let path = '/api/calculatePrice';
    let type = 'DIAMOND'
    let data = { weight: weight, carat: carat, color: color.label, cut: cut, clarity: clarity, type: type }
    AjaxService.post(path, data).then(res => {
      console.log(res.data.price)
      handlePrice(res.data.price.price)
      handleOpenModal();
    })

  }

  return (
    <div>
      <form >
        <div className="form-center">
          <div className="form-group">
            <DiamondsList
              header={'SELECT YOUR CLARITY'}
              list={['FL', 'IF', 'VVS1', 'VVS2', 'VS1', 'VS2', 'SI1']}
              selected={clarity}
              onChange={handleClarity}
            />
          </div>


          <div className="form-group">
            <DiamondsList
              header={'SELECT YOUR CUT'}
              list={['Round', 'Princess', 'Marquise', 'Cushion', 'Emerald', 'Radiant', 'Pear', 'Oval', 'Asscher','Heart']}
              selected={cut}
              onChange={handleCut}
            />
          </div>


          <div className="form-group">
            <div className={'list-header'}>{'SELECT YOUR COLOR'}</div>
            <Slider list={colorsList} onChange={handleColor} />
          </div>

          <div className="form-group">
            <div className={'list-header'}>{'SELECT YOUR WEIGHT'}</div>
            <CustomSlider min={0.10} max={10} onChange={handleWight} />
          </div>

          <div className="form-group">
            <div className={'list-header'}>{'SELECT YOUR CARAT'}</div>
            <CustomSlider min={0.1} max={5}onChange={handleCarat} />
          </div>

    



        </div>
        <button title={'Calculate'} onClick={e => onSubmit(e)} type="submit" className="btn">Calculate</button>

        {price !== 0 && <div className="total">
          {`$${price} \n Price VAT included`}
        </div>}

      </form>
      <Modal 
      price={price}
shape={cut}
        open={openModal}
        handleClose={handleCloseModal}
      />
    </div>

  );
}

export default CalculatorForm;