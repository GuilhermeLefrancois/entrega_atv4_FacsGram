import React, { Component } from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native'

class Comments extends Component {
    componentDidMount() {
        this.setState({
            comments: this.props.comments
        })

        if (!this.state?.limit) {
            this.setState({
                limit: 2,
            })
        }
    }

    getMore() {
        this.setState({
            limit: this.state?.limit == 2 ? this.state.limit + this?.state?.comments?.length - 2 : 2
        })
    }

    render() {
        let view = null

        if (this.state?.comments) {
            view = this.state.comments.slice(0, this.state.limit).map((item, index) => {
                return (
                    <View style={styles.commentContainer} key={index}>
                        <Text style={styles.nickname}>{item.nickname}: </Text>
                        <Text style={styles.comment}>{item.comment}</Text>
                    </View>
                )
            })                
        }

        return (
            <View style={styles.container}>
                {view}{" "}
                <TouchableOpacity onPress={() => { this.getMore() }}>
                    <Text style={styles.moreComment}> Exibir mais comentários</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10
    },
    commentContainer: {
        flexDirection: 'row',
        marginTop: 5
    },
    nickname: {
        marginLeft: 5,
        fontWeight: 'bold',
        color: '#444'
    },
    comment: {
        color: '#555'
    },
    moreComment: {
        color: '#0000ff',
        lineHeight: 35,
        marginLeft: 3
    }
})

export default Comments
