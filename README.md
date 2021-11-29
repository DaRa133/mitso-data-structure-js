# mitso-basic-js

## Общее описание задачи

Ваша задача — разобраться с несколькими структурами данных, чтобы решить подзадачи. Описания подзадач, а также инструкции по запуску тестов и отправке решений находятся ниже.

---

### **Бинарное дерево поиска**

![Binary search tree](https://www.tutorialspoint.com/data_structures_algorithms/images/binary_search_tree.jpg)  
**Бинарное дерево** — это иерархическая **структура данных**, в которой каждый **узел** имеет **значение** (оно же является в данном случае и ключом) и **ссылки** на **левого** и **правого** **потомка**. **Узел**, находящийся на самом верхнем уровне (не являющийся чьим либо потомком) называется **корнем**. **Узлы**, не имеющие потомков, называются **листьями**.

**Бинарное дерево поиска** — это **бинарное дерево**, обладающее дополнительными свойствами: значение **левого** потомка **меньше** значения родителя, а значение **правого** потомка **больше** значения родителя для каждого **узла** дерева. То есть, данные в бинарном дереве поиска хранятся в отсортированном виде. При каждой операции **вставки** нового или **удаления** существующего узла отсортированный порядок дерева сохраняется. При **поиске** элемента сравнивается искомое значение с корнем. Если искомое **больше** корня, то поиск продолжается в **правом** потомке корня, если **меньше**, то в **левом**, если **равно**, то значение **найдено** и поиск прекращается.

Ваша задача — реализовать класс `BinarySearchTree`.
Каждый экземпляр `BinarySearchTree` должен обладать следующими методами:

- `root` — возвращает **корневой узел** дерева
- `add(data)` — добавляет **узел** с `data` к дереву
- `has(data)` — возвращает `true`, если **узел** с `data` имеется в дереве и `false`, если нет
- `find(data)` — возвращает **узел** с `data`, если **узел** с `data` имеется в дереве и `null`, если нет
- `remove(data)` — удаляет **узел** с `data` из дерева, если **узел** с `data` имеется в дереве
- `min` — возвращает **минимальное** **значение**, хранящееся в дереве (или `null`, если у дерева нет **узлов**)
- `max` — возвращает **максимальное** **значение**, хранящееся в дереве (или `null`, если у дерева нет **узлов**)

Например:

`const tree = new BinarySearchTree();`

`tree.add(1);`

`tree.add(2);`

`tree.add(3);`

`tree.add(4);`

`tree.add(5);`

`tree.root().data` => `1;`

`tree.min()` => `1`

`tree.max()` => `5`

`tree.remove(5);`

`tree.has(5)` => `false`

`tree.max()` => `4`

Напишите свой код в `src/binary-search-tree.js`.

---