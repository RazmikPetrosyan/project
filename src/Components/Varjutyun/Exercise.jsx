import react from "react";
import './exercise.scss';

class Exercise extends react.Component {

    state = {
        arr: [],
        test: [],
        gumar: ""
    }

    render() {

        const start = () => {
            let arr = [];
            let copyArr = [];
            let sum = 0;

            for(let i = 0; i < 90; i++) {
                const rnd = Math.floor(Math.random() * 30)
                arr.push(rnd);
                copyArr.push(rnd);
            }

            this.setState({arr});  
            
            let krknvox = [];
            
            for(let i = 0; i < copyArr.length; i++) {
                let count = 0;
                for(let j = 0; j < copyArr.length; j++) {
                    if(copyArr[i] === copyArr[j]) {
                        count++;
                        copyArr.splice(i, 1);
                    }
                }
                if(count >= 3) {
                    sum += copyArr[i];
                    krknvox.push(copyArr[i]);
                }
                count = 0;
            }
            this.setState({test: krknvox, gumar: sum})
            
        }

        return(
            <div className="exer">
                <form action="/" className="exer__form">
                    <p className="info__inner--task">Տրված է a1, a2, ..... a90 տարրերից բաղկացած զանգվածը։ Գտնել զանգվածի այն տարրերի գումարը, որոնք այդ նույն զանգվածի մեջ ունեն իրենց հավասար գոնե 2 տարրեր։</p>
                    <button type='button' onClick={start}>Start</button>
                    <div className="array">
                        {this.state.arr.map(key => {
                            return <p>{key}</p>
                        })}
                    </div>
                    <div className="krknvox">
                        {this.state.test.map(key => {
                            return <p className="red">{key}</p>
                        })}
                    </div>
                    <div className="gumar">{this.state.gumar}</div>
                </form>
            </div>
        )
    }
}

export default Exercise;
