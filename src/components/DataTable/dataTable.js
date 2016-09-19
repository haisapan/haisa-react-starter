import React from 'react';
import ReactDOM from 'react-dom';

var DataTable = React.createClass({

    propTypes: {
        // columns: React.PropTypes.array.isRequired
        // data: React.PropTypes.Array.isRequired
    },
    getDefaultProps:function(){
        return {
            columns:[]
        }
    },

    render: function () {
        console.log(this.props.data);

        return (
            <div>
            <h1>DataTable</h1>
                <table>
                    <tbody>
                        <tr>
                            {
                                this.props.columns.map((item) => {
                                    return <td key={item.field}>{item.field}</td>
                                })
                            }
                        </tr>
                    </tbody>


                </table>
                {
                    this.props.children
                }
            </div>
        );
    }

});

export default DataTable;