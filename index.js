console.log("JavaScript file loaded");
#include <iostream>
#include <stdlib.h>

void adje(int num);
void noun(int num);
void adve(int num);
void verb(int num);
char i[256];
int main(){
	std::cout << "what is your peardeck code?: ";
	fgets(i, sizeof(i), stdin);
	std::string str(i);
	int length = str.length();
	if(length==7){
		adje(0);
		noun(1);
		adve(2);
		verb(3);
		adje(4);
		noun(5);
	}
	else if(length==6){
		adje(0);
		noun(1);
		verb(2);
		adje(3);
		noun(4);
	}
	else{
		std::cout << "invalid input, exiting";
		std::exit(EXIT_FAILURE);
	}
	std::exit(EXIT_SUCCESS);
}
void adje(int num){
	switch(i[num]){
		case 'a':
			std::cout << "Acidic ";
			break;
		case 'b':
			std::cout << "Broke ";
			break;
		case 'c':
			std::cout << "Confused ";
			break;
		case 'd':
			std::cout << "Determined ";
			break;
		case 'e':
			std::cout << "Exothermic ";
			break;
		case 'f':
			std::cout << "Fragrant ";
			break;
		case 'g':
			std::cout << "Green ";
			break;
		case 'h':
			std::cout << "Hilarious ";
			break;
		case 'i':
			std::cout << "Insincere ";
			break;
		case 'j':
			std::cout << "Juicy ";
			break;
		case 'k':
			std::cout << "Keen ";
			break;
		case 'l':
			std::cout << "Lovely ";
			break;
		case 'm':
			std::cout << "Misty ";
			break;
		case 'n':
			std::cout << "New ";
			break;
		case 'o':
			std::cout << "Orange ";
			break;
		case 'p':
			std::cout << "Purple ";
			break;
		case 'q':
			std::cout << "Quick ";
			break;
		case 'r':
			std::cout << "Red ";
			break;
		case 's':
			std::cout << "Stoic ";
			break;
		case 't':
			std::cout << "Troubling ";
			break;
		case 'u':
			std::cout << "Underwhelmed ";
			break;
		case 'v':
			std::cout << "Victorious ";
			break;
		case 'w':
			std::cout << "Warm ";
			break;
		case 'x':
			std::cout << "Xeric ";
			break;
		case 'y':
			std::cout << "Young ";
			break;
		case 'z':
			std::cout << "Zesty ";
			break;
		default:
			std::cout << "invalid input, exiting";
			std::exit(EXIT_FAILURE);
	}
}
void noun(int num){
	switch(i[num]){
		case 'a':
			std::cout << "Avocados ";
			break;
		case 'b':
			std::cout << "Bandanas ";
			break;
		case 'c':
			std::cout << "Carrots ";
			break;
		case 'd':
			std::cout << "Drums ";
			break;
		case 'e':
			std::cout << "Elephants ";
			break;
		case 'f':
			std::cout << "Flashlights ";
			break;
		case 'g':
			std::cout << "Grapes ";
			break;
		case 'h':
			std::cout << "Highlighters ";
			break;
		case 'i':
			std::cout << "Incentives ";
			break;
		case 'j':
			std::cout << "Jacks ";
			break;
		case 'k':
			std::cout << "Kangaroos ";
			break;
		case 'l':
			std::cout << "Lemons ";
			break;
		case 'm':
			std::cout << "Muffins ";
			break;
		case 'n':
			std::cout << "Ninjas ";
			break;
		case 'o':
			std::cout << "Olives ";
			break;
		case 'p':
			std::cout << "Pears ";
			break;
		case 'q':
			std::cout << "Quizzes ";
			break;
		case 'r':
			std::cout << "Raisins ";
			break;
		case 's':
			std::cout << "Submarines ";
			break;
		case 't':
			std::cout << "Turnips ";
			break;
		case 'u':
			std::cout << "Umbrellas ";
			break;
		case 'v':
			std::cout << "Violas ";
			break;
		case 'w':
			std::cout << "Watermelons ";
			break;
		case 'x':
			std::cout << "X-Rays ";
			break;
		case 'y':
			std::cout << "Yards ";
			break;
		case 'z':
			std::cout << "Zebras ";
			break;
		default:
			std::cout << "invalid input, exiting";
			std::exit(EXIT_FAILURE);
	}
}

void adve(int num){
	switch(i[num]){
		case 'a':
			std::cout << "Always ";
			break;
		case 'b':
			std::cout << "Bravely ";
			break;
		case 'c':
			std::cout << "Calmly ";
			break;
		case 'd':
			std::cout << "Daringly ";
			break;
		case 'e':
			std::cout << "Easily ";
			break;
		case 'f':
			std::cout << "Fondly ";
			break;
		case 'g':
			std::cout << "Gladly ";
			break;
		case 'h':
			std::cout << "Honestly ";
			break;
		case 'i':
			std::cout << "Instantly ";
			break;
		case 'j':
			std::cout << "Joyfully ";
			break;
		case 'k':
			std::cout << "Kindly ";
			break;
		case 'l':
			std::cout << "Loudly ";
			break;
		case 'm':
			std::cout << "Magically ";
			break;
		case 'n':
			std::cout << "Neatly ";
			break;
		case 'o':
			std::cout << "Openly ";
			break;
		case 'p':
			std::cout << "Perfectly ";
			break;
		case 'q':
			std::cout << "Quietly ";
			break;
		case 'r':
			std::cout << "Rarely ";
			break;
		case 's':
			std::cout << "Safely ";
			break;
		case 't':
			std::cout << "Tenderly ";
			break;
		case 'u':
			std::cout << "Usually ";
			break;
		case 'v':
			std::cout << "Victoriously ";
			break;
		case 'w':
			std::cout << "Warmly ";
			break;
		case 'x':
			std::cout << "Xerically ";
			break;
		case 'y':
			std::cout << "Yearly ";
			break;
		case 'z':
			std::cout << "Zestfully ";
			break;
		default:
			std::cout << "invalid input, exiting";
			std::exit(EXIT_FAILURE);
	}
}

void verb(int num){
	switch(i[num]){
		case 'a':
			std::cout << "Award ";
			break;
		case 'b':
			std::cout << "Bother ";
			break;
		case 'c':
			std::cout << "Conduct ";
			break;
		case 'd':
			std::cout << "Drive ";
			break;
		case 'e':
			std::cout << "Evaluate ";
			break;
		case 'f':
			std::cout << "Form ";
			break;
		case 'g':
			std::cout << "Give ";
			break;
		case 'h':
			std::cout << "Help ";
			break;
		case 'i':
			std::cout << "Inspect ";
			break;
		case 'j':
			std::cout << "Jump ";
			break;
		case 'k':
			std::cout << "Keep ";
			break;
		case 'l':
			std::cout << "Lift ";
			break;
		case 'm':
			std::cout << "Memorize ";
			break;
		case 'n':
			std::cout << "Notice ";
			break;
		case 'o':
			std::cout << "Officiate ";
			break;
		case 'p':
			std::cout << "Pursue ";
			break;
		case 'q':
			std::cout << "Quiz ";
			break;
		case 'r':
			std::cout << "Raise ";
			break;
		case 's':
			std::cout << "Switch ";
			break;
		case 't':
			std::cout << "Turn ";
			break;
		case 'u':
			std::cout << "Underwhelm ";
			break;
		case 'v':
			std::cout << "Vacate ";
			break;
		case 'w':
			std::cout << "Wish ";
			break;
		case 'x':
			std::cout << "X-Ray ";
			break;
		case 'y':
			std::cout << "Yield ";
			break;
		case 'z':
			std::cout << "Zip ";
			break;
		default:
			std::cout << "invalid input, exiting";
			std::exit(EXIT_FAILURE);
	}
}
