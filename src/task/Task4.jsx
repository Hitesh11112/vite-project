
const Task4 = () => {

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center', border: '0px solid black' }}>

                <div style={{ border: '1px solid black', width: '350px', height: '364px', justifyContent: 'center' }}>
                    {/* upper block */}
                    <div style={{ height: '130px', backgroundColor: '#111b' }}>
                    </div>

                    {/* photo */}
                    <div style={{ left: '631px', top: '175px', border: '1px solid black', borderRadius: '100%', width: '120px', height: '115px', position: 'absolute', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
                        <img src="https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg" width='100%' height="100%" objectFit="cover" />
                    </div>


                    {/* middle block */}
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '130px' }}>
                        <br /><br />
                        <p style={{ fontSize: '16px', margin: '0px' }}><b>Hitesh Patwal </b>22</p>
                        UttaraKhand
                    </div>
                    <hr />
                    {/* lower block */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', height: '100px' }}>
                        <p style={{ fontSize: '16px', margin: '0px', height: '35px', width: '65px' }}><b>80K Followers</b></p>
                        <p style={{ fontSize: '16px', margin: '0px', height: '35px', width: '37px' }}><b>803K Likes</b></p>
                        <p style={{ fontSize: '16px', margin: '0px', height: '35px', width: '45px' }}><b>1.4K Photos</b></p>
                    </div>
                </div>
            </div >
        </>
    );
};
export default Task4;
