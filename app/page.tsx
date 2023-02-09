'use client'

import { AiFillHtml5 } from 'react-icons/ai'
import { SiCss3 } from 'react-icons/si'
import { IoLogoJavascript } from 'react-icons/io'
import { FaPlay } from 'react-icons/fa'
import NavBar from './NabBar'


function run() {
    let html = (document.getElementById('html') as HTMLInputElement).value
    let css = (document.getElementById('css') as HTMLInputElement).value
    let js = (document.getElementById('js') as HTMLInputElement).value
    let output:any = (document.getElementById('output') as HTMLInputElement)

    output.contentDocument.body.innerHTML = html + "<style>" + css + "</style>"
    output.contentWindow.eval(js)

    

}

function page() {

    return (

        <div>
            <NavBar />
            <div className="pr-5">
                <div className="pl-5 pt-10">

                    <label className="text-white flex bg-[#000]"> <AiFillHtml5 className='m-1' /> HTML </label>
                    <textarea placeholder='// Write HTML code.' onKeyUp={() => run()} name="" id="html" className="w-full h-44 p-3  bg-[#1f1f1f] text-white border-none outline-none text-lg"></textarea>

                    <label className="text-white flex bg-[#000]"><SiCss3 className='m-1' />  CSS</label>
                    <textarea placeholder='// Write CSS Code.' onKeyUp={() => run()} name="" id="css" className="w-full h-44 p-3  bg-[#1f1f1f] text-white border-none outline-none text-lg"></textarea>

                    <label className="text-white flex bg-[#000]"><IoLogoJavascript className='m-1' /> JAVASCRIPT</label>
                    <textarea placeholder='// Write Javascript Code.' onKeyUp={() => run()} name="" id="js" className="w-full h-44 p-3 bg-[#1f1f1f] text-white border-none outline-none text-lg"></textarea>
                </div>
                <div className="pt-20 pl-5 pb-6">
                    <label className='text-white flex bg-[#000] '><FaPlay className='m-1 hover:text-blue-700' />  Output</label>
                    <iframe id='output' className="w-full h-64 border-none outline-none bg-[#fff] "></iframe>
                </div>
            </div>
        </div>
    )
}

export default page