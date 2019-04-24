import React, { Component } from 'react';
import {Prompt,Redirect} from 'react-router-dom';

const subject = [
    "PHP",
    "ASP",
    "Swift",
    "Android"
];

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isBlocking : false,
            isRedirect : false,
            txtName : '',
            txtEmail : '',
            txtPhone : '',
            txtMessage : '',
            sltCity : '',
            rdoGioiTinh : 1,
            chkSubject : new Set(),
            file : ''
        };
    }

    checkboxSubject = () => {
        const monhoc = subject.map((value,key) => {
            return <label className="checkbox-inline" key={key}><input  name="chkSubject" type="checkbox" value={ value } onChange={ () => this.checkedSubject(value) } checked={ this.state.chkSubject.has(value) } /> { value } </label>
        });
        return monhoc
    }

    
    componentWillMount() {
        this.checkedCheckbox = new Set();
    }
    

    checkedSubject = (monhoc) => {
        if (this.checkedCheckbox.has(monhoc)) {
            this.checkedCheckbox.delete(monhoc);
        } else {
            this.checkedCheckbox.add(monhoc);
        }

        this.setState({
            chkSubject : this.checkedCheckbox
        });
    }

    isInputChange = (event) => {
        const target = event.target;

        const name = target.name;
        const value = target.value;

        this.setState({
            isBlocking : target.value.length > 0,
            [name] : value
        });
    }

    isFileChange = (event) => {
        this.setState({
            file : event.target.files[0].name
        });
    }

    submitForm = (event) => {
        event.preventDefault()
        event.target.reset()
        this.setState({
          isBlocking: false,
          isRedirect: false
        });

        const {txtName,txtEmail,txtPhone,txtMessage,sltCity,file,chkSubject,rdoGioiTinh} = this.state

        var gioitinh = '';
        if (parseInt(rdoGioiTinh,10) === 1) {
            gioitinh = 'Nam';
        } else {
            gioitinh = 'Nữ';
        }

        var mhoc = '';
        for (const mh of chkSubject) {
            mhoc += mh + ",";
        }

        var content = '';
        content += 'Họ tên : ' + txtName;
        content += ' - Email : ' + txtEmail;
        content += ' - Phone : ' + txtPhone;
        content += ' - Message : ' + txtMessage;
        content += ' - City : ' + sltCity;
        content += ' - Sex : ' + gioitinh;
        content += ' - Subject : ' + mhoc;
        content += ' - File : ' + file;

        console.log(content);
    }
    
    render() {
        
        if (this.state.isRedirect) {
            return (
                <Redirect to="/trang-chu" />
            )
        }

        return (
            <div>
                <Prompt when={this.state.isBlocking} message={location => (`Are you sure you want to go to ${location.pathname}`)} />
                <div className="well well-sm">
                    <h3><strong>Liên Hệ</strong></h3>
                </div>
                <div className="row">
                    <div className="col-md-7">
                    <iframe title="This is a unique title" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.394558614363!2d106.67738851480082!3d10.781062492318384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f28f4044ddd%3A0x48b88917406c3156!2zUXXhu5FjIFR14bqlbiAtIMSQw6BvIFThuqFvIEzhuq1wIFRyw6xuaA!5e0!3m2!1svi!2s!4v1457887522959" width="100%" height={315} frameBorder={0} style={{border: 0}} allowFullScreen />
                    </div>
                    <div className="col-md-5">
                    <h4><strong>Get in Touch</strong></h4>
                    <form onSubmit={ (e) => this.submitForm(e) }>
                        <div className="form-group">
                            <input type="text" name="txtName" value={ this.state.txtName } className="form-control" placeholder="Name" onChange={ (event) => this.isInputChange(event) } />
                        </div>
                        <div className="form-group">
                            <input type="email" name="txtEmail" value={ this.state.txtEmail } className="form-control" placeholder="E-mail" onChange={ (event) => this.isInputChange(event) } />
                        </div>
                        <div className="form-group">
                            <input type="tel" name="txtPhone" value={ this.state.txtPhone } className="form-control" placeholder="Phone" onChange={ (event) => this.isInputChange(event) } />
                        </div>
                        <div className="form-group">
                            <textarea name="txtMessage" defaultValue={ this.state.txtMessage } className="form-control" rows={3} placeholder="Message" onChange={ (event) => this.isInputChange(event) } />
                        </div>
                        <div className="form-group">
                            <select name="sltCity" className="form-control" value={ this.state.sltCity } onChange={ (event) => this.isInputChange(event) }>
                                <option value="">Vui lòng chọn thành phố</option>
                                <option value="hn">Hà Nội</option>
                                <option value="dn">Đà Nẵng</option>
                                <option value="hcm">Hồ Chí Minh</option>
                            </select>
                        </div>
                        <div className="form-group">
                            { this.checkboxSubject() }
                        </div>
                        <div className="form-group">
                            <label className="radio-inline"><input type="radio" name="rdoGioiTinh" value="1" onChange={ (event) => this.isInputChange(event) } checked={ parseInt(this.state.rdoGioiTinh,10) === 1 } />Nam</label>
                            <label className="radio-inline"><input type="radio" name="rdoGioiTinh" value="2" onChange={ (event) => this.isInputChange(event) } checked={ parseInt(this.state.rdoGioiTinh,10) === 2 } />Nữ</label>
                        </div>
                        <div className="form-group">
                            <label className="custom-file">
                                <input type="file" id="file" className="custom-file-input" name="fAvatar" onChange={ (event) => this.isFileChange(event) } />
                                <span className="custom-file-control"></span>
                            </label>
                        </div>

                        <button className="btn btn-default" type="submit" name="button">
                        <i className="fa fa-paper-plane-o" aria-hidden="true" /> Submit
                        </button>
                    </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;