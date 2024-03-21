export function LoadingComponent() {
    return (
        <div className='main' style={{maxWidth: '600px', margin: '0 auto'}}>
          <div style={{maxWidth: '120px', margin: '0 auto'}}>
            <div className="box08">
        <div className="box-top">
          <div className="u01"></div>
        </div>
        <div className="box-center">
          <div className="box-inner">
          <marquee style={{ textAlign: 'center', fontFamily: 'LCD5', fontSize: '10px', fontWeight: 'bold' }}>loading</marquee>
          <img src={require('../../common/my-button/big-icon.gif')} style={{width: '40px', height:  '40px', margin: '0 auto', display: 'flex' }}/>
          </div>
        </div>
        <div className="box-bottom">
          <div className="s01"></div>
        </div>
      </div>
        </div>
        </div>
    );
}
