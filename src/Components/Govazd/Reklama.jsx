import React from "react";
import './reklama.scss';
import cross from './cross.png'

class Reklama extends React.Component {

    state = {
        loader: true
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({loader: false})
        }, 10000);
    }

    render() {

        if(!this.state.loader) {
            this.props.history.push('/login');
        }

        return (
        <div className="intro">
        <div className="container">
        <div className="intro__inner">
        <h1 className="intro__title">Կուրսային աշխատանք</h1>
        <h1 className="intro__title">Պետրոսյան Ռազմիկ Արթուրի</h1>
        <p className="intro__inner--date">22.12.2021</p>
        <p className="info__inner--task">Տրված է a1, a2, ..... a90 տարրերից բաղկացած զանգվածը։ Գտնել զանգվածի այն տարրերի գումարը, որոնք այդ նույն զանգվածի մեջ ունեն իրենց հավասար գոնե 2 տարրեր։</p>
        <img src={cross} alt="" className="intro__img"/>
        </div>
        </div>
        </div>
        );
    }
}

export default Reklama;