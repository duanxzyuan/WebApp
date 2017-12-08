
# coding:utf-8

#zhi yong form finish dui4 buttom de4 jian1ting2
from flask import render_template, flash, redirect,request, url_for
from app import operation as opt,app
import json
import identify.identifying_code
@app.route('/')
@app.route('/login',methods = ['GET', 'POST'])
def Login_Register():

    if request.method == 'GET':
        identify.identifying_code.identifying_make()
        return render_template('login.html')

    else:

        login_username = request.form.get("login_username")
        login_password = request.form.get("login_password")
        login_identifying_code = request.form.get("scode")
        register_username = request.form.get("register_username")
        register_password = request.form.get("register_password")
        register_password2 = request.form.get("register_password2")
        register_result_ = opt.register(register_username, register_password, register_password2)
        register_result = json.loads(register_result_)
        result=opt.login(login_username,login_password,login_identifying_code)
        login_result=json.loads(result)
        if (register_result==1):
            return redirect(url_for('base', usernames=register_username))
        elif (login_result==1):
            return redirect(url_for('base', usernames=login_username))
        elif(register_result==0 and login_result!=1):
            flash(login_result)
            return render_template('login.html')
        else:
            flash(register_result)
            return render_template('login.html')




@app.route('/base?username=<usernames>')
def base(usernames):
    return render_template('welcome.html',
                           username=usernames)
