import React, { useContext, useState } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import { Modal, Input, Button, Space } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

export const TodoItem = ({ todo }) => {
    const { dispatch } = useContext(TodoContext);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [editText, setEditText] = useState(todo.text);
    
    const handleToggle = () => {
        dispatch({ type: 'DONE', id: todo.id });
    };
    
    const handleDelete = () => {
        dispatch({ type: 'DELETE', id: todo.id });
    };

    const handleEdit = () => {
        setEditText(todo.text);
        setIsModalVisible(true);
    };

    const handleModalOk = () => {
        if (editText.trim()) {
            dispatch({ 
                type: 'EDIT', 
                id: todo.id, 
                text: editText.trim() 
            });
            setIsModalVisible(false);
        }
    };

    const handleModalCancel = () => {
        setIsModalVisible(false);
        setEditText(todo.text);
    };
    
    return (
        <div className="todo-item">
            <span 
                className={`todo-text ${todo.done ? 'done' : ''}`}
                onClick={handleToggle}
            >
                {todo.text}
            </span>
            <Space>
                <Button 
                    type="text"
                    icon={<EditOutlined />}
                    onClick={handleEdit}
                    size="small"
                />
                <Button 
                    type="text"
                    icon={<DeleteOutlined />}
                    onClick={handleDelete}
                    size="small"
                    danger
                />
            </Space>
            
            <Modal
                title="编辑 Todo"
                open={isModalVisible}
                onOk={handleModalOk}
                onCancel={handleModalCancel}
                okText="保存"
                cancelText="取消"
            >
                <Input
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    placeholder="请输入新的 todo 内容"
                    onPressEnter={handleModalOk}
                />
            </Modal>
        </div>
    );
};
