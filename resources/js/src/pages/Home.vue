<template>
    <div class="p6">
        <div class="b b-gray-1 b-solid mb-3 pl-4 pr-4 pt-4 search-form">
            <n-form
                ref="formRef"
                label-placement="left"
                label-width="90"
                require-mark-placement="right-hanging"
            >
                <n-flex justify="space-between">
                    <n-form-item label="Input" path="inputValue">
                        <n-input placeholder="Input" />
                    </n-form-item>
                    <n-form-item label="Datetime" path="datetimeValue">
                        <n-date-picker type="datetime" class="w-full"/>
                    </n-form-item>
                    <n-form-item label="Input" path="inputValue">
                        <n-select
                            placeholder="Select"
                            :options="generalOptions"
                        />
                    </n-form-item>
                    <n-form-item label="Input" path="inputValue">
                        <n-input placeholder="Input" />
                    </n-form-item>
                    <n-form-item label="Input" path="inputValue">
                        <n-input placeholder="Input" />
                    </n-form-item>
                    <n-form-item label="Input" path="inputValue">
                        <n-input placeholder="Input" />
                    </n-form-item>
                    <n-form-item label="Input" path="inputValue">
                        <n-input placeholder="Input" />
                    </n-form-item>
                    <n-form-item label="Input" path="inputValue">
                        <n-input placeholder="Input" />
                    </n-form-item>
                </n-flex>
            </n-form>
            <n-divider title-placement="right">
                <n-button class="mx-2">重置</n-button>
                <n-button type="primary" class="mx-2">立即搜索</n-button>
            </n-divider>
        </div>
        <n-space vertical>
            <n-data-table :columns="columns" :data="data" :pagination="pagination" />
        </n-space>
    </div>
</template>

<script lang="ts">
import { h, defineComponent, reactive } from 'vue';
import { NTag, NButton } from 'naive-ui'
import type { DataTableColumns } from 'naive-ui'

type RowData = {
    key: number
    name: string
    age: number
    address: string
    tags: string[]
}

const createColumns = ({
    sendMail
}: {
    sendMail: (rowData: RowData) => void
}): DataTableColumns<RowData> => {
    return [
        {
            title: 'Name',
            key: 'name'
        },
        {
            title: 'Age',
            key: 'age'
        },
        {
            title: 'Address',
            key: 'address'
        },
        {
            title: 'Tags',
            key: 'tags',
            render(row) {
                const tags = row.tags.map((tagKey) => {
                    return h(
                        NTag,
                        {
                            style: {
                                marginRight: '6px'
                            },
                            type: 'info',
                            bordered: false
                        },
                        {
                            default: () => tagKey
                        }
                    )
                })
                return tags
            }
        },
        {
            title: 'Action',
            key: 'actions',
            render(row) {
                return h(
                    NButton,
                    {
                        size: 'small',
                        onClick: () => sendMail(row)
                    },
                    { default: () => 'Send Email' }
                )
            }
        }
    ]
}

const createData = (): RowData[] => [
    {
        key: 0,
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer']
    },
    {
        key: 1,
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['wow']
    },
    {
        key: 2,
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher']
    }
]

export default defineComponent({
    components: {},
    setup() {
        const paginationReactive = reactive({
            page: 2,
            pageSize: 5,
            showSizePicker: true,
            pageSizes: [3, 5, 7],
            onChange: (page: number) => {
                paginationReactive.page = page
            },
            onUpdatePageSize: (pageSize: number) => {
                paginationReactive.pageSize = pageSize
                paginationReactive.page = 1
            }
        })
        return {
            data: createData(),
            columns: createColumns({
                sendMail(rowData) {
                }
            }),
            generalOptions: ['groode', 'veli good', 'emazing', 'lidiculous'].map(
                (v) => ({
                label: v,
                value: v
                })
            ),
            pagination: paginationReactive
        };
    },
});
</script>

<style lang="less" scoped>
.search-form {
    .n-form {
        .n-form-item {
            width: 23% !important;
            min-width: 200px;
        }
    }
}
</style>
