#coding:utf8
import json
import MySQLdb

def login(login_username,login_password,scode):
    rs = json.dumps(0)
    conn = MySQLdb.Connect(host='LAPTOP-EJ673PVD',
                               port=3306,
                               user='root',
                               passwd='angel198.',
                               db='test',
                               charset='utf8')
    user_Login=Login_proof(conn)
    try:
        if(login_username != None and login_password != None and scode!=None):
          print "begin"
          rs=user_Login.login(login_username,login_password,scode)
          print rs
    finally:
        conn.close()
    return rs

class Login_proof(object):
    def __init__(self,conn):
        self.conn=conn
    def check_userName_exist(self,username):
        cur = self.conn.cursor()
        try:
         user_name="SELECT userName FROM login_data WHERE userName='%s'"%username
         print "username"
         cur.execute(user_name)
         rs=cur.fetchall()
         if(len(rs)!=1):
             raise Exception ("user don't exsit".decode('utf-8'))
        finally:
          cur.close()
    def check_password_right(self,username,password):
        cur = self.conn.cursor()
        try:

              password_right = "SELECT userName FROM login_data WHERE userName='%s' AND passWord='%s'" % (username,password)
              print "password"
              cur.execute(password_right)
              rs = cur.fetchall()
              if (len(rs) != 1):

                raise Exception("password is wrong".decode('utf-8'))
        finally:
            cur.close()
    def check_scode_right(self,scode):
          print scode
          scodes=str(scode).lower()
          global str_words_
          str_words_ = str_words_[-4:]
          words = ''.join(str_words_).lower()
          print words
          if(words != scodes):

                raise Exception( "identifying code is wrong".decode('utf-8'))

    def login(self, username, password,scode):
        try:
            self.check_userName_exist(username)
            self.check_password_right(username,password)
            self.check_scode_right(scode)
            self.conn.commit()
            a = json.dumps(1)
            return a
        except Exception as e:
            e_new = str(e)
            m = json.dumps(e_new,ensure_ascii=False)
            self.conn.rollback()
            return m

str_words_ =[]
print str_words_
def get_scode(words):
    global str_words_
    str_words_.append(words)
    print str_words_
def register(register_username,register_password,register_password2):
    rs = json.dumps(0)
    conn = MySQLdb.Connect(host='LAPTOP-EJ673PVD',
                           port=3306,
                           user='root',
                           passwd='angel198.',
                           db='test',
                           charset='utf8')
    register_new = register_user(conn)
    try:
        if ((register_username!=None) and (register_password != None) and (register_password2!=None)):
          rs = register_new.register_in(register_username, register_password,register_password2)
    finally:
        conn.close()
    return rs

class register_user(object):
    def __init__(self, conn):
        self.conn = conn

    def check_userName_exist(self, username):
        cur = self.conn.cursor()
        try:
            user_name = "SELECT userName FROM login_data WHERE userName='%s'" % username
            cur.execute(user_name)
            rs = cur.fetchall()
            if (len(rs) == 1):
                raise ("user is already exsited".decode('utf-8'))
        finally:
            cur.close()

    def check_password_right(self, password, password2):
            if(password != password2):
                raise ("Two cipher inconsistencies".decode('utf-8'))
    def save_uses(self,username,password):
        cur = self.conn.cursor()
        try:
            add = "INSERT login_data(userName,passWord) VALUES('%s','%s')" % (username, password)
            cur.execute(add)
            rs = cur.rowcount
            if (rs != 1):
              raise ("register fail".decode('utf-8'))
        finally:
          cur.close()


    def register_in(self, username, password,password2):
        try:
            self.check_userName_exist(username)
            self.check_password_right(password,password2)
            self.save_uses(username,password)
            self.conn.commit()
            a=json.dumps(1)
            return a
        except Exception as e:
            e_new = str(e)
            m = json.dumps(e_new, ensure_ascii=False)
            self.conn.rollback()
            return m


