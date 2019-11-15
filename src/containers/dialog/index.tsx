import React, { Component } from 'react'

 class Dialog extends Component {
    render() {
        return <div className='warp'>
                 <header className="header">
            <span className="iconfont icon-01"></span>
            <div className="header-right">
                <div className="header-right-input-box">
                    <span className="iconfont icon-fangdajing">马蜂窝</span>
                    <input type="text"/>
                </div>
            </div>
        </header>
        <main className='main'>
        <div className="swiper-container">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
          
                       <img src='../../img/CoUBGV3JOZKAYRMpACtg9uJ5exA386.png' />             
               </div>
               <div className="swiper-slide">
                        <img src="../../img/CoUBGV3KcA-AJurwACLrgaJq2Ro980.png" alt="" />                  
               </div>
               <div className="swiper-slide">
                        <img src="../../img/CoUBGV3KY-OAM4DiACbGe19jLYc548.png" alt="" />                  
               </div>
               
               </div>
               </div>
               </main>


                 <footer className="footer">
            <div className="dibu">
                <span className="iconfont icon-shouye"></span>
                <span className="text">首页</span>
            </div>
            <div className="dibu">
                <span className="iconfont icon-gouwuche"></span>
                <span className="text">购物车</span>
            </div>
            <div className="dibu">
                <span className="iconfont icon-wodedingdan"></span>
                <span className="text">订单列表</span>
            </div>
            <div className="dibu">
                <span className="iconfont icon-wode"></span>
                <span className="text">我的</span>
            </div>
            <div className="dibu">
                <span className="iconfont icon-gengduo-01"></span>
                <span className="text">更多</span>
            </div>
        </footer>
         </div>
    }
}
export default Dialog;