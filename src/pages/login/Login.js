import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { Form, Icon, Input, Button, Checkbox, message } from 'antd';

import './login.css'

class Login extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isLogin: false
		}
	}

	handleSubmit = e => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				let { username, password} = values
				if (username !== 'yuanhaobaba' && password !== 'yuanhaobaba') {
					message.error('账号密码错误，请重新输入！');
					return
				}
				localStorage.setItem('login', JSON.stringify(true))
				this.setState({
					isLogin: true
				})

			}
		});
	};

	render() {
		const { getFieldDecorator } = this.props.form;
		let { isLogin } = this.state
		if (this.state.isLogin) {
			return <Redirect to="/root"/>
		}
		return (
			<div className="login">
				<div className="login-template">
					<Form onSubmit={this.handleSubmit} className="login-form">
						<Form.Item>
							{getFieldDecorator('username', {
								rules: [{ required: true, message: '请输入用户名' }],
							})(
								<Input
									prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
									placeholder="Username"
								/>,
							)}
						</Form.Item>
						<Form.Item>
							{getFieldDecorator('password', {
								rules: [{ required: true, message: '请输入密码' }],
							})(
								<Input
									prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
									type="password"
									placeholder="Password"
								/>,
							)}
						</Form.Item>
						<Form.Item>
							{getFieldDecorator('remember', {
								valuePropName: 'checked',
								initialValue: true,
							})(<Checkbox>Remember me</Checkbox>)}
							<br/>
							<Button type="primary" htmlType="submit" className="login-form-button" size="large" block>
								Log in
          </Button>
						</Form.Item>
					</Form>
				</div>
			</div>
		);
	}
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Login);

export default WrappedNormalLoginForm;