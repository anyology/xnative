
# Xnative

Xnative component library for React Native (iOS and Android)

## Getting started

```
$ yarn add xnative
```
or
```
$ npm install xnative --save
```

### iOS and Android

For iOS and Android, Use `react-native link` to add the library to your project:

`$ react-native link xnative`

`$ react-native link react-native-vector-icons`


## Usage
```javascript
import React, {Component} from 'react';
import {StatusBar} from "react-native";
import {Button, Container, Content, Header, Icon, Modal, Statusbar, Text} from "xnative";

export default class Home extends Component {
  render() {
    const left = ([
      <Button>
        <Icon p2 type='Foundation' name='align-left' />
      </Button>
    ]);
    const right = ([
      <Button>
        <Icon p2 type='Foundation' name='align-right' />
      </Button>,
    ]);
    const content = (
      <Content>
        <Button horizontal primary style={{marginVertical: 10}}>
          <Icon h2 name='earth' style={{color: 'white'}} />
          <Text h3 style={{color: 'white'}}>Button with icon and text</Text>
        </Button>
        <Button disabled style={{marginBottom: 10}}>
          <Text h3>Button disabled</Text>
        </Button>
        <Button primary style={{marginBottom: 10}}
                onPress={() => {
                  StatusBar.setHidden(true);
                }}
        >
          <Text h3 style={{color: 'white'}}>Statusbar hidden</Text>
        </Button>
        <Button primary style={{marginBottom: 10}}
                onPress={() => {
                  StatusBar.setHidden(false);
                }}
        >
          <Text h3 style={{color: 'white'}}>Statusbar visible</Text>
        </Button>
        <Button primary style={{marginBottom: 10}}
                onPress={() => {
                  StatusBar.setBarStyle("dark-content");
                }}
        >
          <Text h3 style={{color: 'white'}}>Statusbar dark-content</Text>
        </Button>
        <Button primary style={{marginBottom: 10}}
                onPress={() => {
                  StatusBar.setBarStyle("light-content");
                }}
        >
          <Text h3 style={{color: 'white'}}>Statusbar light-content</Text>
        </Button>
        <Button primary style={{marginBottom: 10}}
                onPress={() => {
                  this.modal.show();
                }}
        >
          <Text h3 style={{color: 'white'}}>Show modal</Text>
        </Button>
        <Text p1>P1</Text>
        <Text p2>P2</Text>
        <Text p3>P3</Text>
        <Text p4>P4</Text>
        <Text p5>P5</Text>
        <Text p6>P6</Text>
      </Content>
    );
    return (
      <Container style={{backgroundColor: 'cornflowerblue'}}>
        <Statusbar barStyle="dark-content" />
        <Header left={left} right={right}>
          <Text h3>Header</Text>
        </Header>
        {content}
        <Modal
          ref={(component) => {
            this.modal = component;
          }}
          height={300}
          withClose
          closeText="关闭"
        >
          <Text h1>H1</Text>
          <Text h2>H2</Text>
          <Text h3>H3</Text>
          <Text h4>H4</Text>
          <Text h5>H5</Text>
          <Text h6>H6</Text>
        </Modal>
      </Container>
    );
  }
}

```
## More

View examples and more at [everygogo/xnative-eg](https://github.com/everygogo/xnative-eg.git)