import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Card, CheckBox, Datepicker, IndexPath, Input, Layout, Radio, RadioGroup, Select, SelectItem, Text, Toggle, } from '@ui-kitten/components'


export default function Formulario() {

    const [checked, setChecked] = React.useState(false);
    const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));
    const [date, setDate] = React.useState(new Date());
    const [radioIndex, setRadioIndex] = React.useState(0);
    const [activeChecked, setActiveChecked] = React.useState(false);
    const onActiveCheckedChange = (isChecked) => {
        setActiveChecked(isChecked);
    };

    return (

        <View>

            <Text category="h5" style={{ textAlign: 'center', marginBottom: 10 }}>Formulario</Text>

            <Card style={styles.card}>
                <Input
                    style={{ margin: 2, padding: 5 }}
                    placeholder='Nome'
                />

                <Layout style={styles.container} level='1'>
                    <Datepicker
                        label={"Idade"}
                        style={styles.input}
                        date={date}
                        onSelect={nextDate => setDate(nextDate)}
                    />
                    <Input
                        label={'Sexo'}
                        style={styles.input}
                        placeholder='M / F'
                    />
                </Layout>

                <Layout style={styles.container} level='1'>
                    <Input
                        label={'Celular'}
                        style={styles.input}
                        placeholder='(00) 00000-0000'
                    />
                    <Input
                        secureTextEntry={true}
                        label={'Senha'}
                        style={styles.input}
                    />
                </Layout>

                <Layout style={{ flexDirection: 'row', padding: 5 }} level='1'>
                    <Select
                        style={{ flex: 1 }}
                        selectedIndex={selectedIndex}
                        onSelect={index => setSelectedIndex(index)}>
                        <SelectItem title='Junior' />
                        <SelectItem title='Pleno' />
                        <SelectItem title='Senior' />
                    </Select>
                </Layout>
            </Card>

            <Card style={styles.card}>
                <Layout style={{ flexDirection: 'row', margin: 2 }} level='1'>
                    <CheckBox
                        style={{ padding: 10 }}
                        checked={checked}
                        onChange={nextChecked => setChecked(nextChecked)}
                    >
                        <Text></Text>
                    </CheckBox>

                    <RadioGroup
                        selectedIndex={radioIndex}
                        onChange={index => setRadioIndex(index)}>
                        <Radio status="success">Sucesso</Radio>
                        <Radio disabled>Disabled</Radio>
                        <Radio >Normal</Radio>
                    </RadioGroup>

                    <Toggle
                        style={{ marginLeft: 10 }}
                        checked={activeChecked}
                        onChange={onActiveCheckedChange}>
                    </Toggle>

                    <Toggle
                        style={{ margin: 5 }}
                        checked={true}
                        disabled={true}>
                    </Toggle>
                </Layout>
            </Card>

            <Card>
                <Layout style={styles.container} level='1'>

                    <Button onPress={() => alert("Botão simples")} style={styles.button} >
                        Botão simples
                    </Button>

                    <Button style={styles.button} disabled >
                        Botão disabilitado
                    </Button>

                </Layout>
            </Card>
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 5
    },
    input: {
        flex: 1,
        margin: 2,
    },
    card: {
        marginBottom: 10
    },
    button: {
        margin: 5
    }

});