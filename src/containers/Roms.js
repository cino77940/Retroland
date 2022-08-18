import React, { Component } from 'react'
import { FaDownload } from "@react-icons/all-files/fa/FaDownload";
import ThirdImage from '../components/Accueil/ThirdImage';

class Roms extends Component {
  render() {
    return (
        <div>
              <ThirdImage/>

  <div className="container-fluid">
            <div className="row mt-4 ms-4 me-4">

              <div className="ms-2 border col text-center">
                  <h1 className="mt-4" >NES</h1>
                <ul>
                    <li>
                      <p className="h6 text-center">Pack <a href="http://rodoudou37.free.fr/Recalbox/Nes.zip"><FaDownload className="emuIconLink"/></a></p>
                    </li>

                </ul>
              </div>



              <div className="ms-2 border col text-center">
                  <h1 className="mt-4" >N64</h1>
                <ul>
                    <li>
                      <p className="h6 text-center">Pack <a href="https://th4ykc.debrid.it/dl/2hryaqocbc1/n64.7z"><FaDownload className="emuIconLink"/></a></p>
                    </li>
                </ul>
              </div>



              <div className="ms-2 border col text-center">
                  <h1 className="mt-4" >SNES</h1>
                <ul>
                    <li>
                      <p className="h6 text-center">Pack <a href="https://th4ykc.debrid.it/dl/2hrybka01e3/snes.7z"><FaDownload className="emuIconLink"/></a></p>
                    </li>
                </ul>
              </div>



              <div className="ms-2 border col text-center">
                  <h1 className="mt-4" >PS1</h1>
                <ul>
                    <li>
                      <p className="h6 text-center">Pack <a href="https://th4ykc.debrid.it/dl/2hsds5ifb88/psx.7z"><FaDownload className="emuIconLink"/></a></p>
                    </li>
                </ul>
              </div>



            </div>
        </div>    
    
        </div>
    )
  }
}
export default Roms;