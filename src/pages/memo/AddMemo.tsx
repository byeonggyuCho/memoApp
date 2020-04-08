import * as React from 'react';
import { Memo } from '../../models';
import Button from '../../components/Button';

interface Props {
  apiCalling: boolean;
  addMemo(memo: Memo): void;
}



class AddMemoPage extends React.Component<Props> {

  handleChange = (evt: React.FormEvent<HTMLTextAreaElement>) => {
    const {value} = evt.currentTarget;
    this.setState({ value })
  }

  handleClickSave = () => {
    const { addMemo } = this.props;
    const {value} = this.state;
    const content = value.trim();
    if (!content) return;

    addMemo({ content })
  }

  render() {
    const {apiCalling} = this.props;
    const {value} = this.state;
    
    return (
      <React.Fragment>
        <form>
          <textarea 
            value={value} 
            onChange={this.handleChange} 
          />
        </form>
        <Button to="/memo">취소</Button>
        <Button 
          // api 요청상태에 따라 버튼을 비활성화 한다 
          disabled={apiCalling} 
          onClick={this.handleClickSave}
        >저장</Button>
      </React.Fragment>
    )
  }
}

export default AddMemoPage;