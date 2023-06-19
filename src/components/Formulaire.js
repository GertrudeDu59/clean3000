import { Button, Form, Input, DatePicker, Upload} from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import AddAvis from '../routes/AddAvis';
import { dataName, dataDate, dataComment, resetFormulaire } from '../slices';
import { useDispatch, useSelector } from 'react-redux';


const Formulaire = () => {
  const dispatch = useDispatch();
  const { name, date, comment } = useSelector((state) => state.formulaire || {});


  const handleNameChange = (e) => {
    dispatch(dataName(e.target.value));
  };

  const handleDateChange = (date) => {
    dispatch(dataDate(date));
  };

  const handleCommentChange = (e) => {
    dispatch(dataComment(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(resetFormulaire());
  };
  return (
    <Form
    onFinish={handleSubmit}
    name="wrap"
    labelCol={{
      flex: '110px',
    }}
    labelAlign="left"
    labelWrap
    wrapperCol={{
      flex: 1,
    }}
    colon={false}
    style={{
      maxWidth: 600,
    }}
  >
    <Form.Item
      label="Nom de l'entreprise"
      name="Nom de l'entreprise ou du client"
      
    >
      <Input value={name} onChange={handleNameChange}/>
    </Form.Item>

    
    <Form.Item label="Date d'intervantion">
        <DatePicker value={date} onChange={handleDateChange} />
      </Form.Item>


    <Form.Item name={['user', 'introduction']} label="Observations">
      <Input.TextArea value={comment} onChange={handleCommentChange}/>
    </Form.Item>


    <Form.Item label="Signature" valuePropName="fileList" getValueFromEvent={AddAvis}>
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          </Upload>
    </Form.Item>
    <Form.Item>
        <Button type="primary" htmlType="submit">Envoyer</Button>
      </Form.Item>
  </Form>
  )
}

export default Formulaire