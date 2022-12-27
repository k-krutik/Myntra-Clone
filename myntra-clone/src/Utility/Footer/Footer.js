import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
    
    <hr style={{margin:"0 2%"}}/>
      <div className="foot">
        <div className="footer container">
          <div className="content">
            <b>ONLINE SHOPPING</b>

            <div className="subContent">
              Men <br />
              Women <br /> Kids <br /> Home & Living <br />
              Beauty <br />
              Gift Cards <br />
              Myntra Insider New
            </div>
          </div>

          <div className="content">
            <b>USEFUL LINKS</b>
            <div className="subContent">
              Contact Us
              <br />
              FAQ
              <br />
              T&C
              <br />
              Terms Of Use
              <br />
              Track Orders
              <br />
              Shipping
              <br />
              Cancellation
              <br />
              Returns
              <br />
              Whitehat
              <br />
              Site Map
            </div>
          </div>

          <div className="content">
            <b>EXPERIENCE MYNTRA APP ON MOBILE</b>

            <div className="subContent">
              <img
                height={"40px"}
                width={"135px"}
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK4AAAAzCAYAAAAO9DNzAAAAAXNSR0IArs4c6QAAG2pJREFUeF7tnQd4VFX6xt87SUgIRSyAq2JvWCl2BEHFvkXdYtldde0NCzaMZd1ddYvuurruruvaGx3sLkGqDZUiXUqCpEAIpJDMZPr9P79DTvY6/5BMJgPBfebyzBNy595zzj3nPe/3ft/5zo0TjkRdv9+vDRUVmjd/nr7++muVlZaqsrJSwWBQrusqlcNxnDbf672H/3M0V38yZW/tmmTu9T5vS+1IvC6ZvkqmXYl1JtPmZK7Z2ji2dG/imCTzjKn0C/cktoPf8/Ly1Lt3b+3Vp48OOeQQ9evXX7169ZJT7w+45eXlmj1rpj755BPzKSsrUyQSUTweTwWzmXsyPZC2HvD5fOrUqZP69Omjk046yXxOHjxETvm69e7MmTM0tbBQEydOVHV1ddoqzRSU6YF09sAuu+yin/zkJzp9+HA58+bPd99++2298frrWr58eTrryZSV6YG098ARRxyhiy6+WE5h4VR37NgxGjNmjDZv3pz2ijIFZnognT3Qo8fOuvTSS+SMHz/efe211/Sf//xHgUAgnXVkysr0QNp7ID8/X+edd56c0aNHu6+//roKCwvV0NCQ9ooyBWZ6IJ090LlzZ51xxhkpANdx5GT75HTKlhzJDUflRuLErdLZvnaXlZWVZUIp3bp1U3Z2tomQMDGxKuFwWHRAly5dzHcchHn4Licnx3zwZjlHSCYUComQIeFBznMv56mDa/F6bZjI1lNXV9d0jmu89cViMdXX15v2RKNRc3/37t1N/TYEyT2wC/XS3syxpQdSB25WlrJ37aa8g3opq3snBRaVKrbJr3gwukOBFyAcfPDBuvDCC3XQQQcZQHz00Ud67733TLhv4MCB+tGPfqRdd93VAAwAffjhh8JzxQEANIATIBYXF2vs2LHmZ25urk444QTtvvvu2rBhg04++WTttddeTTFIADtjxgwjvQgpUkbPnj3NPeeee66JSRIjxyH+7LPPVFtba0I9v/rVr4zV+/LLLw1Q99tvP/3gBz/Q6NGjVVpamglNNs7clIHr22135Q4drM7XDpKvyxo5pTUKvbdMoY+KFF5bbRi4o48ePXoYQF199dUGJEuXLjVABCBLlizRv/71L33/+9/XZZddpoqKCq1bt06wIDFsWPjYY4/VoYceaoAPmFavXm2Ay7WUc8kll5hgOJNgwIABZmKcdtppmjt3rlauXGkmAJOEyQBoL730UmPeaMeaNWu0995767DDDjP3v//++/re976nF198UfPnz9ejjz5q6qPce++9V3fccYe5j/ZljnYwrm/fvsq+5EbFzztXud2myKc1Um2Nsr+uUnDCQkUWlitW6d8C4A5SD0cddZSuuuoqA7LHHntMGzduNCZ95513NuwKMGBiwPvGG29o8eLFhtFgP8z/brvtZhyAn/70p7r++usN4/EdkgFg//KXvzTAfeGFFwzrAty///3v+utf/6rp06ebc1YqnHPOObryyivN+XfeeceUg3yh/GHDhpnYOeX/85//NNLh+eefN2y977776oEHHtAtt9yiRYsWZYDbXsZ1Du4v57ICxYeep6zstcruPkO+vBIpXK+syoA0c42iU1crsnyD4lUBuaHtz8Cnn366Ae4rr7xiGA05ABgBHcyFlsR0IxWmTJliWBLzDIAB1k477aTzzz/fABR2Xb9+fRNwvMAFrMiHAw88UK+++qoeeeQRw9DesOJvfvMbs0TJtQDQamHkyJ133mlADqB///vf64svvjAMPX78eKNtR40alQFugplJWSrokAHS5QXSkPMlNy5fbpF8O0+TA3izwnJicXUqrpM7bqlC01YpVlIj+cNyo9tv+Rg2+/nPf65f//rXJvcC2QDroUvRnMiH2bNn6/LLLzdA2rRpk3GW/vCHPxiz3LVr17QB98knnzQg/Mc//qG1a9c2DQO6GCmAZgb0sOvjjz9urAAOIO275pprdNNNN2UY1wPe9gH3igLplAsksOjG5OQVybfLNKlLseJZcbIllN0QU6fFm+SMXaaGNxcrVtMgxbYPeNGT1157rZ599ll98MEHhvHQlWhcQIx+HDdunAYNGqRJkyYZYCAVyNmAjZEU6WJcNCvlwbgLFy5sGoK+ffvq7rvvNjLmzTff1EMPPWTYFcsA0zK5kCCANyMV/ovc1IF76ADJAhcNG3clJyjlrZWz6wy5XYslnyuHUFIwpqzqkHLnVSo2bonCn69VfGNAbnTbOhoM+M0332wAA4th6tG7xxxzjC666CLjzVdVVRmNSQzbatyamhoD3HRKBZw2WPPTTz81kwSg0i7W3EkYeemll4zT99vf/ta0me+JMOBY0h4sBYDPOGft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"
                alt=""
              />{" "}
              &nbsp;
              <img
                height={"40px"}
                width={"135px"}
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJcAAAAyCAYAAABRTkkkAAAAAXNSR0IArs4c6QAAF0xJREFUeF7t3QW0lMUbBvC5FqhYKIiBDQbYimIXKqhgoNhKGCgK145jd3d3K7bY3QXYgWC3mGArev/nN57xfOx/9+6yuxcFd86558Z+O9/M+z7v8z7zznx768aMGdvwySefhGHDhoann346vPbaa8HvY8aMCb///ntoaGgItVazQNYCdXV1YaqppgotWrQIc8wxR1h44YXDSiutFJbv1CkssMACoUWLGeLldSNHjmp45JFHwpAhd4RHH300/PTTT+HPP/+sWbNmgZIsMMUUU4RmzZqFpZdeOmzWs2dYc801Q7t27ePf6gYPHtxw7bXXhrvuuisyVa3VLFCOBbAZ9tphhx3C+l27hdlnnz3U1dfXN1xxxRXh22+/raXAcqxae8/fFphuuunCZpttFnbs3Tt07rxSqOvSpUtMi+PGjauZqWaBiiwgRS6zzDJh1113DRt17xHqOnbs2EDE11rNAtWwQNu2bcOu/fuHXlv0CnVt27Zt+Oijj6rRb1X7kMOnnnrqgGr9rFlo/Pbbb+HXX3+dqIuOGWaYIUw55ZTxvj///HPV5mnFZX7E71dffdWksgSr+EoZatppp433/eOPP8L3339ftTnNNttsYeuttw59+/ULdW3atGn4/PPPq9Z5tToCLMvcVVddNRpFSYQR3nnnnfDuu++GX375ZaIBbO211w6dO3cON998c3jzzTerNcXQsmXL0LVr19C+fftw9NFHN9mCSnBOP/30AaC+/PLLOH7lg8033zw888wz4aGHHqranGaaaaaw8cYbhwED9gh1rVu3bhg9enTVOq9WR4yxxhprhDPOOCO88sorEVizzDJLrK089thj4fzzz4+GypZNsIvfK6nNATJn6CP1vcUWW4QNN9wwjmX48OF/T9G1iVFz560P48EMuePxmq9WrVrF1ZVl/I477hiZMV9r7D6ub+xeXp9mmmnCBhtsENZdd93Qv3//eAvaaM8994xVgptuuqngWNO9zaEUu84444yhW7duYdCg+okDrplnnjnMOeeccVJY8ptvvimKQSBaZ511wmmnnRZ22WWX8PHHH8foY6Att9wyHHnkkTHifvzxx+ikDh06BFEjvbz33nvhiy++CCa64IILhjfeeCOmg7nnnju0bt06PPnkkzElLLTQQvHvZAFjA/Css84aUPtnn30WXn755VhM7tWrV9hoo43C6aefHoYNGxbHseiii0ZmBZ5PP/003gM4vEZ3/FVMbBHHg+2MRxq0RF988cVD8+bN49ix4vzzzx+22Wab8cAFMECx2GKLRdv52Zjc54cffoj9mLc5sq+vESNGxLl//fXX49m3Y8eOoV+/ftHpAwYMiHNo165dqK+vD88++2wcnznLCDIDsnE/c5hnnnli3+7tdQX2xhoJgY3r6/dqWnBJbQyjsLbWWmtFY5500klxkMUaxzD8ySefHKNu5MiRMbrmmmuucOaZZ8bSiVSCXdC76AcEhnj++edjRALKEUccEQ2qhrfHHntEx7oeC/pdv7feemu48MILo2GlDk5j3Isvvjjcd999YZNNNvkbXK+++mpYb7314piMBwiA6pprroms1qZNmwhGqU5BmoOUeu6///4IaIECyBxoTMbLTrngMo6llloqbLvtthGwiZGNx9wExr777hvZW7/sDOjY9YknnhiPZQSjFZxUiKUErDkeeOCB8f0khnGbMzuoHgjCgQMHxtTtddpQCmWTxnZuJgq4RKkBouG+fftGR2Mak/zwww+LYStGfS64vAkogGXZZZeN7CUC999//3DccceF5557LqZSaYw+uvfee+Oug/tz4KGHHhr7ZTTG4rjBgwcHgLnxxhsjuACXY/faa69oeN9FPObiOIFx2223RQBfdtll8Vr9SRmunW+++cJyyy0X+xQA/qadcMIJgeFvuOGGyIDGtsQSS0SAu08uuDj/+OOPj8zk+u+++y6OF3NL0e5z2GGHRdY1d0F3wQUXhEsuuSReD2ip8QNQA5n3Y1P3Pvzww2NAHnLIIRHkpMaDDz4Yzj777NCjR4+w0047hYMPPjiOr0uXLjEoBZXAKFS6SuAaOHBQ0zEXmhXBmEoKEN0imCMKaYss4gqBixE4hHH0LXUyGoeKqHnnnTccdNBBkVE49tJLL42O9D7A43TGoiVQ/jnnnBNXgEDmWqAEmJ133jksssgi0SloHrgYnZNFMMABs3F27949AtdYxo4dG8e2yiqrxIBafvnl4/2OPfbYCAjgXXLJJePfAGL33XePAZILLikc27ne2NwXkwkW88Bm3gvo119/fWRRgL/lllvCiSeeON7iIM2HvsOaGnuxD9tceeWV8W933HFH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"
                alt=""
              />
            </div>
            <br />
            <b>KEEP IN TOUCH</b>

            <div className="subContent">
              <img
                height={"20px"}
                width={"20px"}
                src="./Images/icons8-facebook.svg"
                alt=""
              />{" "}
              &nbsp;
              <img
                height={"22px"}
                width={"22px"}
                src="./Images/icons8-twitter.svg"
                alt=""
              />{" "}
              &nbsp;
              <img
                height={"22px"}
                width={"22px"}
                src="./Images/icons8-youtube-24.png"
                alt=""
              />
              &nbsp;
              <img
                height={"24px"}
                width={"24px"}
                src="./Images/icons8-instagram.svg"
                alt=""
              />
            </div>
          </div>
          <div className="content">
            <p>
              <img
                height={"26px"}
                width={"26px"}
                src="./Images/icons8-squared-menu-24.png"
                alt=""
              />
              <b> 100% Original</b> guarantee for all products at myntra.com
            </p>
            <p>
              <img
                height={"26px"}
                width={"26px"}
                src="./Images/icons8-replace-50.png"
                alt=""
              />
              <b>Return within 30 days</b> of receiving your order
            </p>
          </div>
        </div>
        <hr className="break" />
        <div className="category">
          <p>
            Makeup | Dresses For Girls | T-Shirts | Sandals Headphones |
            Babydolls | Blazers For Men | Handbags | Ladies Watches | Bags |
            Sport Shoes | Reebok Shoes | Puma Shoes | Boxers | Wallets |Tops |
            Earrings | Fastrack Watches | Kurtis | Nike | Smart Watches | Titan
            Watches | Designer |Blouse | Gowns | Rings | Cricket Shoes | Forever
            21 Eye Makeup | Photo | Frames | Punjabi Suits | Bikini Myntra
            Fashion Show Lipstick Saree Watches | Dresses | Lehenga | Nike Shoes
            | Goggles Bras | Suit | Chinos | Shoes | Adidas Shoes | Woodland
            Shoes | Jewellery | Designers Sarees
          </p>
        </div>
        <hr style={{margin:"0"}}/>
        <center style={{color: "#696b79"}}>© 2022 www.myntra.com (ClonedByKrutik) All rights reserved</center>
        <hr style={{margin:"0"}}/>
      </div>
    </>
  );
}

export default Footer;
