import { Button, Form, Input, DatePicker, Upload} from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import AddAvis from '../routes/AddAvis';
const Formulaire = () => (

  <Form
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
      <Input />
    </Form.Item>

    
    <Form.Item label="Date d'intervantion">
        <DatePicker />
      </Form.Item>


    <Form.Item name={['user', 'introduction']} label="Observations">
      <Input.TextArea />
    </Form.Item>


    <Form.Item label="Signature" valuePropName="fileList" getValueFromEvent={AddAvis}>
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          </Upload>
    </Form.Item>

    <Form.Item label="">
        <Button type="primary" htmlType="submit">
        Envoyer
        </Button>
    </Form.Item>
    
  </Form>

);
export default Formulaire;