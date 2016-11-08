#include <stdio.h>
#include <string.h>
#include <stdlib.h>

typedef char* string;

string subString(string input, int offset, int len){
	string dest = malloc(sizeof(char)*len+1);
	int input_len = strlen(input);

	if (offset + len > input_len){
		return NULL;
	}

	strncpy(dest, input + offset, len);
	dest[len] = '\0';

	printf("%d\n", *dest);

	return dest;
}

int main(){
	string source = "ola mundo";
	string hello = "";
	string depois = "";

	printf("Endereco hello: %d\n", *hello);
	printf("Endereco source: %d\n", *source);
	printf("Endereco depois: %d\n", *depois);

	hello = subString(source, 1, 5);
	printf("hello: %s\n", hello);

	printf("Endereco hello: %d\n", *hello);
	printf("Endereco source: %d\n", *source);
	printf("Endereco depois: %d\n", *depois);

	depois = subString(source, 0, 2);
	printf("depois: %s\n", depois);

	printf("Endereco hello: %d\n", *hello);
	printf("Endereco source: %d\n", *source);
	printf("Endereco depois: %d\n", *depois);

	printf("source: %s\n", source);

	return 0;
}