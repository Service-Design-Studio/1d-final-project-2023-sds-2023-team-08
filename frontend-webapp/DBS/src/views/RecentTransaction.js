import React from 'react';
import '../components/styles/RecentTransaction.css';

const Recenttransaction = () => {
  
  return (
    <div className='maincontainer'>
      <div className='sticky'>
        <div className='header'>
          <button onClick={() => {}} className='transparent'>
            <img src={require('../../src/components/assets/back.png')} className='back' />
          </button>
          <p className='headertext'>Recent Transactions</p>
        </div>
        
        <div className='filtercontainer'>
          <div className='scrollhorizontal'>
            <button className='transparent' onClick={() => {}}>
              <div className='filterrectangleunselected'>
                <p className='name'>423-24325-0</p>
              </div>
            </button>

            <button className='transparent' onClick={() => {}}>
              <div className='filterrectangleunselected'>
                <p className='name'>423-24325-0</p>
              </div>
            </button>

            <button className='transparent' onClick={() => {}}>
              <div className='filterrectangleunselected'>
                <p className='name'>423-24325-0</p>
              </div>
            </button>

            <button className='transparent' onClick={() => {}}>
              <div className='filterrectangleunselected'>
                <p className='name'>423-24325-0</p>
              </div>
            </button>
          </div>
        </div>

        <button className='transparent' onClick={() => {}}>
          <div className='ftd'>
            <p className='ftdtext'>Fund Transfer Dispute Transactions</p>
            <img src={require('../../src/components/assets/expand.png')} className='expand'/>
          </div>
        </button>

      </div>

      <div className='scrollview'>

        <div className='datecontainer'>
          <p className='date'> Day, Date</p>
        </div>
        
        <button className='transparent' onClick={() => {}}>
          <div className='transaction'>
            <div className='transactionheader'>
              <p className='transactiontitle'>PayNow Transfer hehe lmao omg omg hehe lmao is this long enough just checking: XXX</p>
              <img src={require('../../src/components/assets/expand.png')} className='expand'/>
            </div>

            <p className='transactiontype'>FAST / PayNow Transfer</p>
            
            <div className='transactiondetails'>
              <p className='account'>XXX-XXXXX-X</p>
              <div className='rightcontainer2'>
                <p className='sgd1'>SGD</p>
                <p className='money1'>XX.XX</p>
              </div>
            </div>
          </div>
        </button>

        <button className='transparent' onClick={() => {}}>
          <div className='transaction'>
            <div className='transactionheader'>
              <p className='transactiontitle'>PayNow Transfer hehe lmao omg omg hehe lmao is this long enough just checking: XXX</p>
              <img src={require('../../src/components/assets/expand.png')} className='expand'/>
            </div>

            <p className='transactiontype'>FAST / PayNow Transfer</p>
            
            <div className='transactiondetails'>
              <p className='account'>XXX-XXXXX-X</p>
              <div className='rightcontainer2'>
                <p className='sgd1'>SGD</p>
                <p className='money1'>XX.XX</p>
              </div>
            </div>
          </div>
        </button>

        <button className='transparent' onClick={() => {}}>
          <div className='transaction'>
            <div className='transactionheader'>
              <p className='transactiontitle'>PayNow Transfer hehe lmao omg omg hehe lmao is this long enough just checking: XXX</p>
              <img src={require('../../src/components/assets/expand.png')} className='expand'/>
            </div>

            <p className='transactiontype'>FAST / PayNow Transfer</p>
            
            <div className='transactiondetails'>
              <p className='account'>XXX-XXXXX-X</p>
              <div className='rightcontainer2'>
                <p className='sgd1'>SGD</p>
                <p className='money1'>XX.XX</p>
              </div>
            </div>
          </div>
        </button>

        <button className='transparent' onClick={() => {}}>
          <div className='transaction'>
            <div className='transactionheader'>
              <p className='transactiontitle'>PayNow Transfer hehe lmao omg omg hehe lmao is this long enough just checking: XXX</p>
              <img src={require('../../src/components/assets/expand.png')} className='expand'/>
            </div>

            <p className='transactiontype'>FAST / PayNow Transfer</p>
            
            <div className='transactiondetails'>
              <p className='account'>XXX-XXXXX-X</p>
              <div className='rightcontainer2'>
                <p className='sgd1'>SGD</p>
                <p className='money1'>XX.XX</p>
              </div>
            </div>
          </div>
        </button>

        <button className='transparent' onClick={() => {}}>
          <div className='transaction'>
            <div className='transactionheader'>
              <p className='transactiontitle'>PayNow Transfer hehe lmao omg omg hehe lmao is this long enough just checking: XXX</p>
              <img src={require('../../src/components/assets/expand.png')} className='expand'/>
            </div>

            <p className='transactiontype'>FAST / PayNow Transfer</p>
            
            <div className='transactiondetails'>
              <p className='account'>XXX-XXXXX-X</p>
              <div className='rightcontainer2'>
                <p className='sgd1'>SGD</p>
                <p className='money1'>XX.XX</p>
              </div>
            </div>
          </div>
        </button>

        <button className='transparent' onClick={() => {}}>
          <div className='transaction'>
            <div className='transactionheader'>
              <p className='transactiontitle'>PayNow Transfer hehe lmao omg omg hehe lmao is this long enough just checking: XXX</p>
              <img src={require('../../src/components/assets/expand.png')} className='expand'/>
            </div>

            <p className='transactiontype'>FAST / PayNow Transfer</p>
            
            <div className='transactiondetails'>
              <p className='account'>XXX-XXXXX-X</p>
              <div className='rightcontainer2'>
                <p className='sgd1'>SGD</p>
                <p className='money1'>XX.XX</p>
              </div>
            </div>
          </div>
        </button>

        <button className='transparent' onClick={() => {}}>
          <div className='transaction'>
            <div className='transactionheader'>
              <p className='transactiontitle'>PayNow Transfer hehe lmao omg omg hehe lmao is this long enough just checking: XXX</p>
              <img src={require('../../src/components/assets/expand.png')} className='expand'/>
            </div>

            <p className='transactiontype'>FAST / PayNow Transfer</p>
            
            <div className='transactiondetails'>
              <p className='account'>XXX-XXXXX-X</p>
              <div className='rightcontainer2'>
                <p className='sgd1'>SGD</p>
                <p className='money1'>XX.XX</p>
              </div>
            </div>
          </div>
        </button>


      </div>
    </div>
  );
};

export default Recenttransaction;
