import React from 'react';

export default class Home extends React.Component {
    componentWillMount() {
        this.props.getAllUsers();
    }
    render() {
        console.log(this.props.users);
        return <div>
            <div className="col-md-6">
                <table className="table table-striped table-hover">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>用户名</th>
                        <th>姓名</th>
                        <th>性别</th>
                        <th>年龄</th>
                        <th>电话</th>
                        <th>邮箱</th>
                        <th>备注</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.users.map((u, i) => {
                            return <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{u.username}</td>
                                <td>{u.name}</td>
                                <td>{u.sex}</td>
                                <td>{u.age}</td>
                                <td>{u.tel}</td>
                                <td>{u.mail}</td>
                                <td>{u.remark}</td>
                            </tr>
                        })
                    }
                    </tbody>
                </table>
            </div>
        </div>
    }
}