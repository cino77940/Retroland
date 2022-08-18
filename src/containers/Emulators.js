import React, { Component } from 'react'
import SecondImage from '../components/Accueil/SecondImage';
import { FaDownload } from "@react-icons/all-files/fa/FaDownload";
class Emulators extends Component {
  render() {
    return (

      <div>
            <SecondImage/>
        <div className="container-fluid">
            <div className="row mt-4 ms-4 me-4">

              <div className="ms-2 border col text-center">
                  <h1 className="mt-4" >NES</h1>
                <ul>
                    <li>
                      <p className="h6 text-center">Windows <a href="https://www.planetemu.net/php/emulateurs/?action=download&id=252"><FaDownload className="emuIconLink"/></a></p>
                    </li>

                    <li>
                      <p className="h6 text-center">Mac <a href="https://www.planetemu.net/php/emulateurs/?action=download&id=253"><FaDownload className="emuIconLink"/></a></p>
                    </li>
                </ul>
              </div>



              <div className="ms-2 border col text-center">
                  <h1 className="mt-4" >N64</h1>
                <ul>
                    <li>
                      <p className="h6 text-center">Windows <a href="https://www.pj64-emu.com/file/setup-project64-3-0-0-5632-f83bee9/"><FaDownload className="emuIconLink"/></a></p>
                    </li>

                    <li>
                      <p className="h6 text-center">Mac <a href="https://github.com/mupen64plus/mupen64plus-core/archive/refs/heads/master.zip"><FaDownload className="emuIconLink"/></a></p>
                    </li>
                </ul>
              </div>



              <div className="ms-2 border col text-center">
                  <h1 className="mt-4" >SNES</h1>
                <ul>
                    <li>
                      <p className="h6 text-center">Windows <a href="https://sites.google.com/site/bearoso/snes9x/snes9x-1.60-win32.zip?attredirects=0&d=1"><FaDownload className="emuIconLink"/></a></p>
                    </li>

                    <li>
                      <p className="h6 text-center">Mac <a href="https://sites.google.com/site/bearoso/snes9x/snes9x-1.60-macosx-i386.zip?attredirects=0&d=1"><FaDownload className="emuIconLink"/></a></p>
                    </li>
                </ul>
              </div>



              <div className="ms-2 border col text-center">
                  <h1 className="mt-4" >PS1</h1>
                <ul>
                    <li>
                      <p className="h6 text-center">Windows <a href="http://www.epsxe.com/files/ePSXe205.zip"><FaDownload className="emuIconLink"/></a></p>
                    </li>

                    <li>
                      <p className="h6 text-center">Mac <a href="http://www.epsxe.com/files/ePSXe205.app.zip"><FaDownload className="emuIconLink"/></a></p>
                    </li>
                </ul>
              </div>



            </div>
        </div>    
      </div>
    )
  }
}

export default Emulators;
